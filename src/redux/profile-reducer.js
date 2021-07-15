const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const profileReducer = (state, action) => {

  if (action.type === ADD_POST) {
    let newPost = {
      id: 3,
      message: state.newPostText,
      likes: 0
    }
    state.postsData.push(newPost)
    state.newPostText = '';
  } else if (action.type === UPDATE_POST_TEXT) {
    state.newPostText = action.postText
  }

  return state;
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: text
  }
}
