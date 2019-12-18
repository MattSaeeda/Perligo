import posts from '../data/posts';


const postReducer = function posts1(state = posts, action) {
      //console.log(action.index)
      switch (action.type) {
            case 'upVote': return (action.upVote + 1);
            console.log(state.upVote)
            case 'ADD_POST': return [...state, action.post];
            default: return state;
            
      }
}

export default postReducer