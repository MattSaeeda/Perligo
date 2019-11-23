pragma solidity >=0.5.0;

import "./Rewards.sol";

contract Perligo is Rewards {

      uint256 public tokensPerBlock;
      uint256 public blockFreezeInterval;

      struct Post {
            string title;
            string body;
            Comment[] comments;
            uint upVotes;
            uint downVotes;
            uint timePosted;
      }

      struct Comment {
            string body;
            uint upVotes;
            uint downVotes;
            uint timePosted;

      }

      struct UserScores {
            uint userPostScore;
            uint userCommentScore;
            uint userVoteScore;
            uint userTotalScore;
      }

      constructor() Rewards(tokensPerBlock , blockFreezeInterval) public {}

      /**
      * @dev Function to add users to the economy.
      * @param _user The address that will be able to mint tokens.
      * @return A boolean that indicates if the operation was successful.
      */
      function addUser(address _user) public returns (bool){
            Rewards.addMinters(_user);
            return true;

      }

      /**
      * @dev Function to remove users from the economy.
       * @param _user The address that will be unable to mint tokens.
      * @return A boolean that indicates if the operation was successful.
      */
      function removeUser(address _user) public returns (bool) {
            Rewards.removeMinters(_user);
            return true;
      }
      
      /**
      * @dev Function to mint new tokens into the economy.
      * @return A boolean that indicates if the operation was successful.
      */
      function mintTokensToPool() private returns (bool) {
            Rewards.mintTokens();
            return true;
      }

      function updateUserMask(address _user, uint _mask) private returns (bool){
            Rewards.participantsMask[_user] = _mask;
            return true;

      }

      function showUserMask(address _user) public returns (bool){
            uint256 userMask;
            userMask = Rewards.participantsMask[_user];
            return userMask;

      }

}