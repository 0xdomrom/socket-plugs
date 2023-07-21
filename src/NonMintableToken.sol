pragma solidity 0.8.13;

import "solmate/tokens/ERC20.sol";

contract NonMintableToken is ERC20 {
    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        uint256 totalSupply_
    ) ERC20(name_, symbol_, decimals_) {
        _mint(msg.sender, totalSupply_);
    }
}
