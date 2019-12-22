import {database} from '../database/config';
import posts from '../data/posts';

export function startAddingPost(post) {
      return (dispatch) => {
            return database.ref('posts').update({[post.id]: post}).then(() => {
                  dispatch(addPost(post))
            }).catch((error) => {
                  console.log(error);
            })
      }
}

export function startLoadingPost() {
      return(dispatch) => {
            return database.ref('posts').once('value').then((snapshot) => {
                  let posts = [];
                  snapshot.forEach((childSnapshot) => {
                        posts.push(childSnapshot.val())
                  })
                  dispatch(loadPosts(posts));
            }).catch((error) => {
                  console.log(error)
                  })
      }
}

export function startAddingComment(comment, postId) {
      return (dispatch) => {
            return database.ref('comments/' + postId).push(comment).then(() => {
                  dispatch(addComment(comment, postId))
            }).catch((error) => {
                  console.log(error)
                  })
      }
}

export function startLoadingComments() {
      return (dispatch) => {
            return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
            comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
            }).catch((error) => {
                  console.log(error)
                  })
      }
}

export function loadComments(comments) {
      return {
      type: 'LOAD_COMMENTS',
      comments
      }
     }

export function upVote(index) {
      return {
            type: "UPVOTE_POST",
            index: index
      }
}

export function addPost(post) {
      return {
            type: 'ADD_POST',
            post
      }
}

export function addComment(comment, postId) {
      return {
            type: 'ADD_COMMENT',
            comment,
            postId

      }
}

export function loadPosts(posts) {
      return {
            type: 'LOAD_POSTS',
            posts
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