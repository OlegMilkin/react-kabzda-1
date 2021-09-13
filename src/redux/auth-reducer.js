import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_LOGGED = 'TOGGLE-LOGGED';

const initialState = {
  userData: {
    id: null,
    login: null,
    email: null,
  },
  isLogged: false
}

export default function authReducer(state = initialState, action){
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: {...action.data},
      }
    case TOGGLE_LOGGED:
      return {
        ...state,
        isLogged: action
      }
    default:
      return state
  }
}

export const setUserData = (data) => ({
    type: SET_USER_DATA,
    data
})

export const setLoggedStatus = (data) => ({
  type: TOGGLE_LOGGED,
  data
})

export const getUserInfo = () => {
  return (dispatch) => {
    authAPI.getUserData().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(data.data))
        dispatch(setLoggedStatus(true))
      }
    })
  }
}

export const loginUser = (login, password, rememberMe) => {
  return (dispatch) => {
    authAPI.loginUser(login, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(getUserInfo())
      } else {
        console.log('not ok')
      }
    })
  }
}

export const logOut = () => {
  return (dispatch) => {
    authAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null))
        dispatch(setLoggedStatus(false))
      }
    })
  }
}