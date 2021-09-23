import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

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
  profile: null,
  status: ""
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: action.payload,
        likes: 0
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export const addPostActionCreator = (payload) => {
  return {
    type: ADD_POST,
    payload
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

export const getUserData = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response))
  }
}

export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response))
  }
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }
}