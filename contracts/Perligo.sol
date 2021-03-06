pragma solidity >=0.5.0;

import "./Rewards.sol";

contract Perligo is Rewards {

      
      Rewards ourReward = new Rewards;
      
      address public owner;

      
      modifier onlyOwner {
        require(msg.sender == owner);
        _;
      }
      
       struct Scores {
            uint postScore;
            uint commentScore;
            uint voteScore;
            uint totalScore;
            uint userFama;
      }
      


      mapping(address => Scores) userScores;
      
      address[] reviewers;

      function updateUserPostScore(address _user , uint _postScore) public returns (bool){
          userScores[_user].postScore += _postScore;
          return true;
      }
      
      function updateUserCommentScore(address _user , uint _timeReviewPosted) public returns(bool){
          require(userScores[_user].userFama > 0 && userScores[_user].userFama < 21);
          uint timePassed = now - _timeReviewPosted;
          userScores[_user].userFama -= 1;
          if(timePassed <= 10800)
            userScores[_user].commentScore += 24; else 
          if(timePassed > 10800 && timePassed <= 32400)
            userScores[_user].commentScore += 15; else
          if(timePassed > 32400 && timePassed <= 64800)
            userScores[_user].commentScore += 9; else
          if(timePassed > 64800 && timePassed <= 86400)
            userScores[_user].commentScore += 6; else
          userScores[_user].commentScore += 3;
          userScores[_user].userFama -= 1;
      }
      
      function updateUserVoteScore(address _user , uint _timeReviewPosted) public{
          require(userScores[_user].userFama > 0 && userScores[_user].userFama <= 20);
          uint timePassed = now - _timeReviewPosted;
          userScores[_user].userFama -= 1;
          if(timePassed <= 10800)
            userScores[_user].commentScore += 8; else 
          if(timePassed > 10800 && timePassed <= 32400)
            userScores[_user].commentScore += 5; else
          if(timePassed > 32400 && timePassed <= 64800)
            userScores[_user].commentScore += 3; else
          if(timePassed > 64800 && timePassed <= 86400)
            userScores[_user].commentScore += 2; else
          userScores[_user].commentScore += 1;
          
      }
      
      function resetUserAndFamaScores() onlyOwner private returns(bool){
          for (uint i=0; i< totalParticipants ; i++){
            userScores[reviewers[i]].commentScore = 0;
            userScores[reviewers[i]].voteScore = 0;
            userScores[reviewers[i]].postScore = 0;
            userScores[reviewers[i]].userFama = 20;
            }
          
      }
      
      function updateUsersMask() private returns(bool){
          uint sumOfAllScores;
          for (uint i=0; i< totalParticipants ; i++){
              userScores[reviewers[i]].totalScore = userScores[reviewers[i]].postScore + userScores[reviewers[i]].commentScore +
              userScores[reviewers[i]].voteScore;
              sumOfAllScores = sumOfAllScores + userScores[reviewers[i]].totalScore;
          }
          uint pearlstoEachScore = 1000000 / sumOfAllScores;
          
          for (uint i=0 ; i<totalParticipants ; i++){
              participantMask[reviewers[i]] = participantMask[reviewers[i]] +userScores[reviewers[i]].totalScore * pearlstoEachScore;
          }
      }
          
      function addUser(address _user) onlyOwner public returns (bool){
            ourReward.addMinters(_user);
            reviewers.push(_user);
            return true;

      }
      
      function showRoundMask() public view returns (uint){
          return roundMask;
      }


      function removeUser(address _user) onlyOwner public returns (bool) {
        ourReward.removeMinters(_user);
        return true;
      }
      
      /**
      * @dev Function to mint new tokens into the economy.
      * @return A boolean that indicates if the operation was successful.
      */
      function mintTokensToPool() onlyOwner private returns (bool) {
            ourReward.trigger();
            return true;
      }
      
      function showUserPostScore(address _user) public view returns (uint){
          return userScores[_user].postScore;
      }
      
      function showUserCommentScore(address _user) public view returns (uint){
          return userScores[_user].commentScore;
      }
      
      function showUserVoteScore(address _user) public view returns (uint){
          return userScores[_user].voteScore;
      }

      function showUserTotalScore(address _user) public view returns (uint){
          uint tScore = userScores[_user].postScore + userScores[_user].commentScore + userScores[_user].voteScore;
          return tScore;
      }


      function showUserMask(address _user) public view returns (uint){
            uint256 userMask;
            userMask = participantMask[_user];
            return userMask;

      }
      

}