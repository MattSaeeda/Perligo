pragma solidity >=0.5.0;

import "./Rewards.sol";

contract Perligo is Rewards {

      uint256 public tokensPerBlock; 
      uint256 public blockFreezeInterval; 

      constructor() Rewards(tokensPerBlock , blockFreezeInterval){}

      /**
      * @dev Function to add users to the economy. 
      * @param _user The address that will be able to mint tokens.
      * @return A boolean that indicates if the operation was successful.
      */
      function addUser(address _user) public returns (bool){

      }

      /**
      * @dev Function to remove users from the economy. 
       * @param _user The address that will be unable to mint tokens.
      * @return A boolean that indicates if the operation was successful.
      */
      function removeUser(address _user) public returns (bool) {
      }
      
      /**
      * @dev Function to mint new tokens into the economy. 
      * @return A boolean that indicates if the operation was successful.
      */
      function mintTokensToPool() private returns (bool) {
      }

      function updateUserMask(address _user) private returns (bool){

      }

      function withdrawReward(address _user) private returns (bool){
            
      }

      function showUserMask(address _user) public returns (bool){

      }

      function updateTokensPerBlock() private returns (bool){

      }

      function updateBlockFreezeInterval() private returns (bool){

      }
}