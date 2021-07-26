const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
  postsData: [
    {
      id: '1',
      message: 'Hi how are you?',
      likes: '5'
    },
    {
      id: '2',
      message: 'Hello I am post?',
      likes: '10'
    },
  ],
  newPostText: 'hello',
}

export const profileReducer = (state = initialState, action) => {

  // let stateCopy = {...state}
  //
  // if (action.type === ADD_POST) {
  //   let newPost = {
  //     id: 3,
  //     message: state.newPostText,
  //     likes: 0
  //   }
  //
  //   stateCopy.postsData = [...state.postsData];
  //   stateCopy.postsData.push(newPost)
  //   stateCopy.newPostText = '';
  // } else if (action.type === UPDATE_POST_TEXT) {
  //   stateCopy.newPostText = action.newText
  // }
  //
  // return stateCopy;

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likes: 0
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state;
  }
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
