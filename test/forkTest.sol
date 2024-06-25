pragma solidity 0.8.13;
import "forge-std/Test.sol";
import "forge-std/console.sol";

import "../contracts/bridge/Controller.sol";
import {UpdateLimitParams} from "../contracts/common/Structs.sol";
import "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {LyraTSADepositHook, LimitHook} from "../contracts/hooks/lyra/LyraTSAHooks.sol";
import "../contracts/bridge/Base.sol";

contract LyraForkTest is Test {
    address caller = 0xFDC28fA368c33DEC7853d63B65FC5Cfe01B212fc;
    address plug = 0x993eF5d9E4341AE0437a8F02dcA614687123acAB;
    address tokenRecipient = 0x6666fe8F577F202Ec729BF653ec25Af5403cbd76;

    //    address fallbackRecipient = 0x1111111111111111111111111111111111111111;
    //    IERC20 token = IERC20(0x7ef0873bBf91B8Ecac22c0e9466b17c6Cc14B1bd);
    //    IERC20 TSA = IERC20(0x79AC9B13810D31066Be547EdA46C40264b39397D);
    //    LyraTSADepositHook hook =
    //        LyraTSADepositHook(payable(0x55328b5036EB15DdCA2a91468F1C70Dcae29b7Ab));
    //    Controller public controller =
    //        Controller(0xbEc0B31bbfA62364EBF6e27454978E33c5d9F4eE);
    //    address connectorPlug = 0x8FF3f8bc7884fe59425F090d5ec6A570472DfF88;

    function setUp() external {}

    function testFork() external {
        vm.deal(address(caller), 1 ether);
        vm.startPrank(caller);

        (bool success, ) = plug.call(
            abi.encodeWithSignature(
                "inbound(uint32,bytes)",
                901,
                hex"000000000000000000000000e43288c8e020817ab77155271238704f8276405e00000000000000000000000000000000000000000000000000038d7ea4c6800000066eee993ef5d9e4341ae0437a8f02dca614687123acab000000000000030f0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000004000000000000000000000000046b76a41d42968a5dbc44f7c998308f7936ed8b8000000000000000000000000486c887352e9afe3d81d6643c65c1cf68a781b18"
            )
        );
        assertTrue(success, "function call failed");
        //        vm.deal(0x3Ff4F1629Aa4Ccbf6D58e43fed234698ECBd9c61, 1 ether);
        //        vm.startPrank(0x000000A94C901AA5d4da1157B2Dd1c4c6b69815e);
        //        0x3Ff4F1629Aa4Ccbf6D58e43fed234698ECBd9c61.call(hex"69700cb4000000000000000000000000797db58f4c6611253e92b9a3260e3cc9c69430a50000000000000000000000000000000000000000000000000000000000000003");
    }
}
