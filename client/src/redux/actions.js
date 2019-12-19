export function upVote(index) {
      return {
            type: "UPVOTE_POST",
            index: index
      }
}

export function addPost(post) {
      return {
            type: 'ADD_POST',
            post: post
      }
}

export function addComment(comment, postId) {
      return {
            type: 'ADD_COMMENT',
            comment,
            postId

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