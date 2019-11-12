pragma solidity >=0.5.0;

import "./Eip1973.sol";

contract Rewards is Eip1973 {


      constructor(){}

      /**
      * @dev Function to add users to the economy. 
      * @param _user The address that will be able to mint tokens.
      * @return A boolean that indicates if the operation was successful.
      */
      function addUser(address _user) public returns (bool){
            Eip1973.addMinters(_user);
            return true;
      }

      /**
      * @dev Function to remove users from the economy. 
       * @param _user The address that will be unable to mint tokens.
      * @return A boolean that indicates if the operation was successful.
      */
      function removeUser(address _user) public returns (bool) {
            Eip1973.removeMinters(_user);
            return true;
      }
      
      /**
      * @dev Function to mint new tokens into the economy. 
      * @return A boolean that indicates if the operation was successful.
      */
      function mintTokensToPool() private returns (bool) {
            Eip1973.mintTokens();
            return true;
      }

      function updateUserMask(address _user, uint256 _mask) private returns (bool){
            Eip1973.participantsMask[_user] = _mask;
            return true;
      }

      function showUserMask(address _user) public returns (uint256){
            uint256 userMask;
            userMask = Eip1973.participantsMask[_user];
            return userMaskg;
      }

}