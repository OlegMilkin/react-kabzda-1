import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
  profile: null,
}

export const profileReducer = (state = initialState, action) => {
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
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

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const getUserData = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}
