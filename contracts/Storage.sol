// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./StorageSlot.sol";
// Uncomment this line to use console.log
 import "hardhat/console.sol";

contract Storage {
  constructor()
  {
    StorageSlot.getUint256Slot(keccak256("jarvis")).value=127;
  }
  function check() external view
  {
    console.log(StorageSlot.getUint256Slot(keccak256("jarvis")).value);
  }
}
