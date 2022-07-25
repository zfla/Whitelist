//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhiteListedAddresses;

    mapping(address => bool) public whiteListedAddresses;

    uint8 public numWhiteListedAddresses;

    constructor(uint8 _maxWhiteListedAddresses) {
        maxWhiteListedAddresses = _maxWhiteListedAddresses;
    }

    function addToWhitelist() public {
        require(!whiteListedAddresses[msg.sender], "Sender has already been whitelisted");
        require(numWhiteListedAddresses < maxWhiteListedAddresses, "Whitelist limit reached");

        whiteListedAddresses[msg.sender] = true;
        numWhiteListedAddresses++;
    }
}

