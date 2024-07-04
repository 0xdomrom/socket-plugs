pragma solidity 0.8.13;

import "../plugins/LimitPlugin.sol";
import "../../interfaces/IController.sol";
import "../plugins/ConnectorPoolPlugin.sol";
import "../LimitHook.sol";
import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import "../../interfaces/IBridge.sol";
import {IConnector} from "../../interfaces/IConnector.sol";

interface LyraTSAShareHandler {
    function initiateDeposit(
        address toVault,
        address fallbackDest,
        address withdrawalConnector,
        address withdrawalRecipient,
        uint amount
    ) external;

    function initiateWithdrawal(
        address fromVault,
        address fallbackDest,
        address withdrawalConnector,
        address withdrawalRecipient,
        uint amount
    ) external;
}

interface IBridgeExt is IBridge {
    function token() external view returns (address);
}

interface IConnectorPlugExt is IConnector {
    function bridge__() external returns (IBridge);
}

interface IBaseTSA {
    function getSharesValue(uint numShares) external view returns (uint);
}

abstract contract LyraTSAShareHandlerHookBase is LimitHook {
    struct PackedAddresses {
        address returnRecipient;
        address fallbackReceiver;
        address withdrawConnector;
    }

    uint public withdrawalMinGasLimit = 500000;
    LyraTSAShareHandler public lyraTSAShareHandler;

    /**
     * @notice Constructor for creating a new SuperToken.
     * @param owner_ Owner of this contract.
     */
    constructor(
        address owner_,
        address controller_,
        bool useControllerPools_
    ) LimitHook(owner_, controller_, useControllerPools_) {
        hookType = LYRA_VAULT_ZAP_HOOK;
    }

    receive() external payable {}

    ///////////
    // Admin //
    ///////////
    function setWithdrawalMinGasLimit(uint limit) external onlyOwner {
        withdrawalMinGasLimit = limit;
    }

    function recoverEth(address payable recipient) external onlyOwner {
        recipient.transfer(address(this).balance);
    }

    function recoverERC20(IERC20 token, address recipient) external onlyOwner {
        token.transfer(recipient, token.balanceOf(address(this)));
    }

    function setShareHandler(address shareHandler) external onlyOwner {
        lyraTSAShareHandler = LyraTSAShareHandler(shareHandler);
    }

    ////////////////
    // Hook calls //
    ////////////////

    function dstPreHookCall(
        DstPreHookCallParams memory params_
    )
        external
        override
        isVaultOrController
        returns (bytes memory postHookData, TransferInfo memory transferInfo)
    {
        if (useControllerPools)
            _poolDstHook(params_.connector, params_.transferInfo.amount);

        (uint256 consumedAmount, uint256 pendingAmount) = _limitDstHook(
            params_.connector,
            params_.transferInfo.amount
        );
        transferInfo = params_.transferInfo;
        transferInfo.amount = consumedAmount;

        // No data provided, process normally OR if not all amount is consumed, process normally
        if (params_.transferInfo.extraData.length == 64 && pendingAmount == 0) {
            (address returnRecipient, address withdrawConnector) = abi.decode(
                params_.transferInfo.extraData,
                (address, address)
            );

            if (
                returnRecipient == address(0) || withdrawConnector == address(0)
            ) {
                // In the case of an invalid/zero withdrawConnector we just bridge to original receiver
                postHookData = abi.encode(consumedAmount, pendingAmount);
            } else {
                postHookData = abi.encode(
                    consumedAmount,
                    pendingAmount,
                    params_.transferInfo.receiver,
                    returnRecipient,
                    withdrawConnector
                );
                transferInfo.receiver = address(this);
            }
        } else {
            // Any invalid data shape will be treated as a normal transfer
            postHookData = abi.encode(consumedAmount, pendingAmount);
        }
    }

    function dstPostHookCall(
        DstPostHookCallParams memory params_
    )
        external
        override
        isVaultOrController
        returns (CacheData memory cacheData)
    {
        (
            uint256 consumedAmount,
            uint256 pendingAmount,
            PackedAddresses memory addrs,
            bool attemptToProcess
        ) = _parseParameters(params_);

        if (attemptToProcess) {
            IERC20 mintedToken = IERC20(IBridgeExt(vaultOrController).token());

            uint balance = mintedToken.balanceOf(address(this));
            if (balance < consumedAmount) {
                revert("MINTED_BALANCE_MISMATCH");
            }

            _completeAction(mintedToken, addrs, consumedAmount);
        }

        uint256 connectorPendingAmount = _getConnectorPendingAmount(
            params_.connectorCache
        );
        if (pendingAmount > 0) {
            cacheData = CacheData(
                abi.encode(
                    params_.transferInfo.receiver,
                    pendingAmount,
                    params_.connector
                ),
                abi.encode(connectorPendingAmount + pendingAmount)
            );

            emit TokensPending(
                params_.connector,
                params_.transferInfo.receiver,
                consumedAmount,
                pendingAmount,
                params_.messageId
            );
        } else {
            cacheData = CacheData(
                bytes(""),
                abi.encode(connectorPendingAmount + pendingAmount)
            );
        }
    }

    function _parseParameters(
        DstPostHookCallParams memory params_
    )
        internal
        pure
        returns (
            uint256 consumedAmount,
            uint256 pendingAmount,
            PackedAddresses memory addrs,
            bool attemptToProcess
        )
    {
        if (params_.postHookData.length == 64) {
            (consumedAmount, pendingAmount) = abi.decode(
                params_.postHookData,
                (uint256, uint256)
            );
            return (consumedAmount, pendingAmount, addrs, false);
        } else if (params_.postHookData.length == 160) {
            // If the data is 160 bytes, it means we want to attempt to deposit to the TSA
            // and withdraw the shares immediately
            (
                consumedAmount,
                pendingAmount,
                addrs.fallbackReceiver,
                addrs.returnRecipient,
                addrs.withdrawConnector
            ) = abi.decode(
                params_.postHookData,
                (uint256, uint256, address, address, address)
            );

            if (pendingAmount != 0) {
                revert("INVALID_PENDING_AMOUNT");
            }

            if (
                addrs.fallbackReceiver == address(0) ||
                addrs.returnRecipient == address(0) ||
                addrs.withdrawConnector == address(0)
            ) {
                return (consumedAmount, pendingAmount, addrs, false);
            }

            return (consumedAmount, pendingAmount, addrs, true);
        } else {
            revert("parse: INVALID_DATA_LENGTH");
        }
    }

    function _completeAction(
        IERC20 mintedToken,
        PackedAddresses memory addrs,
        uint256 consumedAmount
    ) internal virtual;

    function _checkFeedsStale(IBaseTSA tsa) internal {
        try tsa.getSharesValue(1e18) {
            // success
        } catch {
            revert("LYRA_FEEDS_STALE");
        }
    }
}

contract LyraTSAShareHandlerDepositHook is LyraTSAShareHandlerHookBase {
    constructor(
        address owner_,
        address controller_,
        bool useControllerPools_
    ) LyraTSAShareHandlerHookBase(owner_, controller_, useControllerPools_) {}

    function _completeAction(
        IERC20 mintedToken,
        PackedAddresses memory addrs,
        uint256 consumedAmount
    ) internal override {
        IBridgeExt withdrawVault = tryGetWithdrawVault(addrs.withdrawConnector);
        address token = address(tryGetToken(withdrawVault));

        _checkFeedsStale(IBaseTSA(address(token)));

        mintedToken.approve(address(lyraTSAShareHandler), consumedAmount);

        // we dont worry about the connector pointing at the wrong token here, the shareHandler will revert
        try
            lyraTSAShareHandler.initiateDeposit(
                token,
                addrs.fallbackReceiver,
                addrs.withdrawConnector,
                addrs.returnRecipient,
                consumedAmount
            )
        {
            // success
        } catch {
            // send token to fallback
            mintedToken.transfer(addrs.fallbackReceiver, consumedAmount);
        }
    }

    /// @dev Returns zero address if bridge is not found or connector is invalid
    function tryGetWithdrawVault(
        address connector
    ) internal returns (IBridgeExt withdrawVault) {
        (bool success, bytes memory data) = connector.call(
            abi.encodeWithSignature("bridge__()")
        );

        if (!success || data.length == 0) {
            return IBridgeExt(address(0));
        }

        return IBridgeExt(abi.decode(data, (address)));
    }

    /// @dev Returns zero address if not found
    function tryGetToken(
        IBridgeExt withdrawVault
    ) internal returns (IERC20 withdrawToken) {
        (bool success, bytes memory data) = address(withdrawVault).call(
            abi.encodeWithSignature("token()")
        );
        if (!success || data.length == 0) {
            return IERC20(address(0));
        }
        return IERC20(abi.decode(data, (address)));
    }
}

contract LyraTSAShareHandlerWithdrawHook is LyraTSAShareHandlerHookBase {
    constructor(
        address owner_,
        address controller_,
        bool useControllerPools_
    ) LyraTSAShareHandlerHookBase(owner_, controller_, useControllerPools_) {}

    function _completeAction(
        IERC20 mintedToken,
        PackedAddresses memory addrs,
        uint256 consumedAmount
    ) internal override {
        // Minted token == TSA contract
        _checkFeedsStale(IBaseTSA(address(mintedToken)));

        mintedToken.approve(address(lyraTSAShareHandler), consumedAmount);
        // we dont worry about the connector pointing at the wrong token here, the shareHandler handles that
        // we also dont worry about failures here,
        try
            lyraTSAShareHandler.initiateWithdrawal(
                address(mintedToken),
                addrs.fallbackReceiver,
                addrs.withdrawConnector,
                addrs.returnRecipient,
                consumedAmount
            )
        {
            // success
        } catch {
            // send token to fallback
            mintedToken.transfer(addrs.fallbackReceiver, consumedAmount);
        }
    }
}
