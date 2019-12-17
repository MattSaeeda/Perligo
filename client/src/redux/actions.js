export function upVote(index) {
      return {
            type: "UPVOTE_POST",
            index: index
      }
}

// function downVote(index) {
//       return {
//             type: "DOWNVOTE_POST",
//             index: index
//       }
// }

// function comment(index) {
//       return {
//             type: "COMMENT",
//             index: index
//       }
// }