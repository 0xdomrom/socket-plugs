pragma solidity 0.8.13;
import "forge-std/Test.sol";
import "forge-std/console.sol";

import "../contracts/bridge/Controller.sol";
import {UpdateLimitParams} from "../contracts/common/Structs.sol";
import "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {LimitHook} from "../contracts/hooks/lyra/LyraTSAHooks.sol";
import "../contracts/bridge/Base.sol";
import {LyraTSAShareHandlerDepositHook} from "../contracts/hooks/lyra/LyraTSAShareHandlerHooks.sol";

contract LyraTSAShareHandlerHookForkTest is Test {
    // forge test --match-contract LyraTSAShareHandlerHookForkTest --fork-url https://l2-prod-testnet-0eakp60405.t.conduit.xyz --fork-block-number 13921305

    address owner = 0x000000A94C901AA5d4da1157B2Dd1c4c6b69815e;
    address caller = 0xFDC28fA368c33DEC7853d63B65FC5Cfe01B212fc;
    address batchAcceptor = 0x1D6811553Aff8231aDd04A84F300b89E15D99EA4;
    address tokenRecipient = 0x6666fe8F577F202Ec729BF653ec25Af5403cbd76;
    address fallbackRecipient = 0x1111111111111111111111111111111111111111;
    address shareHandler = 0x3Ff4F1629Aa4Ccbf6D58e43fed234698ECBd9c61;
    IERC20 token = IERC20(0xa7456213A5c081F53fEb3A4F64b88A4637Bf3028);
    IERC20 TSA = IERC20(0x797Db58F4c6611253e92B9a3260E3Cc9C69430a5);
    LyraTSAShareHandlerDepositHook hook =
        LyraTSAShareHandlerDepositHook(
            payable(0xe0FbdedB6916Ac9CC95616A21eADE5BF62D86e00)
        );
    Controller public controller =
        Controller(0x4508c67469009DA7c5c8A2901554A2195D4E5a5a);
    address connectorPlug = 0x486C887352E9AfE3d81D6643C65c1cf68A781B18;

    struct BridgingEvent {
        address connector;
        address sender;
        address receiver;
        uint256 amount;
        bytes32 messageId;
    }

    function setUp() external {}

    function testHookDepositsWhenNoPayloadProvided() external {
        _updateHookContract();

        vm.deal(address(hook), 1 ether);

        assertEq(token.balanceOf(tokenRecipient), 0);
        assertEq(token.balanceOf(fallbackRecipient), 0);

        bytes
            memory calldataToSend = hex"c41f1f6c0000000000000000000000000000000000000000000000000000000000aa37dc000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000011111111111111111111111111111111111111110000000000000000000000000000000000000000000000000de0b6b3a764000000aa37dc8ff3f8bc7884fe59425f090d5ec6a570472dff88000000000000008600000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000";
        vm.prank(caller);
        connectorPlug.call(calldataToSend);

        assertEq(token.balanceOf(tokenRecipient), 0);
        assertEq(token.balanceOf(fallbackRecipient), 1e18);
    }

    function testHookWithdrawsTSAsAfterDelay() external {
        _updateHookContract();

        vm.deal(address(hook), 1 ether);

        assertEq(token.balanceOf(tokenRecipient), 0);
        assertEq(token.balanceOf(fallbackRecipient), 0);

        vm.recordLogs();
        bytes
            memory calldataToSend = hex"c41f1f6c0000000000000000000000000000000000000000000000000000000000aa37dc000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000011111111111111111111111111111111111111110000000000000000000000000000000000000000000000000de0b6b3a764000000aa37dc8ff3f8bc7884fe59425f090d5ec6a570472dff88000000000000009a000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000400000000000000000000000006666fe8F577F202Ec729BF653ec25Af5403cbd76000000000000000000000000993eF5d9E4341AE0437a8F02dcA614687123acAB";
        vm.prank(caller);
        connectorPlug.call(calldataToSend);

        vm.prank(owner);
        address(shareHandler).call(
            abi.encodeWithSignature("setKeeper(address,bool)", owner, true)
        );
        vm.prank(owner);
        address(TSA).call(
            abi.encodeWithSignature("setShareKeeper(address,bool)", owner, true)
        );
        vm.prank(owner);
        address(TSA).call(
            abi.encodeWithSignature("processDeposit(uint256)", 3)
        );

        assertEq(token.balanceOf(tokenRecipient), 0);
        assertGt(TSA.balanceOf(shareHandler), 1e18);
        assertLt(TSA.balanceOf(shareHandler), 1.1e18);

        vm.prank(owner);
        shareHandler.call(
            abi.encodeWithSignature(
                "completeAction(address,uint256)",
                address(TSA),
                3
            )
        );
    }

    //
    //    function testHookFailsIfNoETHInHook() external {
    //        _updateHookContract();
    //
    //        bytes
    //            memory calldataToSend = hex"c41f1f6c0000000000000000000000000000000000000000000000000000000000aa37dc000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000011111111111111111111111111111111111111110000000000000000000000000000000000000000000000000de0b6b3a764000000aa37dc8ff3f8bc7884fe59425f090d5ec6a570472dff88000000000000009a000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000400000000000000000000000006666fe8F577F202Ec729BF653ec25Af5403cbd76000000000000000000000000993eF5d9E4341AE0437a8F02dcA614687123acAB";
    //        vm.expectRevert("INSUFFICIENT_ETH_BALANCE");
    //        vm.prank(caller);
    //        connectorPlug.call(calldataToSend);
    //    }
    //
    //    function testSendsToFallbackAddressInTheCaseOfInvalidConnector() external {
    //        _updateHookContract();
    //
    //        vm.deal(address(hook), 1 ether);
    //
    //        assertEq(token.balanceOf(tokenRecipient), 3.2e18);
    //        assertEq(token.balanceOf(fallbackRecipient), 0);
    //
    //        // very last byte changed (invalid connector address)
    //        bytes
    //            memory calldataToSend = hex"c41f1f6c0000000000000000000000000000000000000000000000000000000000aa37dc000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000011111111111111111111111111111111111111110000000000000000000000000000000000000000000000000de0b6b3a764000000aa37dc8ff3f8bc7884fe59425f090d5ec6a570472dff88000000000000009a000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000400000000000000000000000006666fe8F577F202Ec729BF653ec25Af5403cbd760000000000000000000000005f675ab715BB9D712e4628E74c8e11B46867aCe2";
    //        vm.prank(caller);
    //        connectorPlug.call(calldataToSend);
    //
    //        // fallback recipient will be the one to have the token minted to them directly
    //        assertEq(token.balanceOf(tokenRecipient), 3.2e18);
    //        assertEq(token.balanceOf(fallbackRecipient), 1e18);
    //    }
    //
    //    function testSendsSharesToFallbackIfWithdrawalFails() external {
    //        _updateHookContract();
    //
    //        // reset TSA withdrawal limit to 0
    //        _updateLimits(
    //            LimitHook(0xfeF7a0bF88bBAA9409485C6Fe343A4135D5E799f),
    //            0x993eF5d9E4341AE0437a8F02dcA614687123acAB,
    //            0,
    //            0
    //        );
    //        // then set to something that will have 0 limit
    //        _updateLimits(
    //            LimitHook(0xfeF7a0bF88bBAA9409485C6Fe343A4135D5E799f),
    //            0x993eF5d9E4341AE0437a8F02dcA614687123acAB,
    //            1,
    //            0
    //        );
    //
    //        vm.deal(address(hook), 1 ether);
    //
    //        assertEq(token.balanceOf(tokenRecipient), 3.2e18);
    //        assertEq(token.balanceOf(fallbackRecipient), 0);
    //        assertEq(TSA.balanceOf(fallbackRecipient), 0);
    //
    //        // very last byte changed (invalid connector address)
    //        bytes
    //            memory calldataToSend = hex"c41f1f6c0000000000000000000000000000000000000000000000000000000000aa37dc000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000011111111111111111111111111111111111111110000000000000000000000000000000000000000000000000de0b6b3a764000000aa37dc8ff3f8bc7884fe59425f090d5ec6a570472dff88000000000000009a000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000400000000000000000000000006666fe8F577F202Ec729BF653ec25Af5403cbd76000000000000000000000000993eF5d9E4341AE0437a8F02dcA614687123acAB";
    //        vm.prank(caller);
    //        connectorPlug.call(calldataToSend);
    //
    //        // fallback recipient will be the one to have the vault shares sent to them (hook will mint token + deposit)
    //        assertEq(token.balanceOf(tokenRecipient), 3.2e18);
    //        assertEq(token.balanceOf(fallbackRecipient), 0);
    //        assertEq(TSA.balanceOf(fallbackRecipient), 1e18);
    //    }

    function _updateHookContract() internal {
        // Update hook
        hook = new LyraTSAShareHandlerDepositHook(
            owner,
            address(controller),
            true
        );
        vm.startPrank(owner);

        (bool success, ) = address(controller).call(
            abi.encodeWithSignature(
                "updateHook(address,bool)",
                address(hook),
                true
            )
        );
        assertTrue(success, "updateHook failed");

        // update connector poolIds
        address[] memory connectors = new address[](1);
        connectors[0] = connectorPlug;
        uint256[] memory poolIds_ = new uint256[](1);
        poolIds_[
            0
        ] = 11366690954124049846388738898898694566834851008565020926048017531612954624;
        hook.updateConnectorPoolId(connectors, poolIds_);

        hook.setShareHandler(shareHandler);
        vm.deal(shareHandler, 1 ether);

        vm.stopPrank();

        // update limit params and fast forward
        _updateLimits(
            hook,
            connectorPlug,
            100000000000000000000000000,
            100000000000000000000000000
        );
        uint currentTime = block.timestamp;
        vm.warp(currentTime + 1);
    }

    function _updateLimits(
        LimitHook hook,
        address connector,
        uint limit,
        uint rate
    ) internal {
        vm.startPrank(owner);
        UpdateLimitParams[] memory updates = new UpdateLimitParams[](2);
        updates[0] = UpdateLimitParams(true, connector, limit, rate);
        updates[1] = UpdateLimitParams(false, connector, limit, rate);
        hook.updateLimitParams(updates);
        vm.stopPrank();
    }
}
