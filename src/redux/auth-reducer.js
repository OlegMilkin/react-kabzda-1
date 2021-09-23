import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samirai-network/auth/SET-USER-DATA';
const TOGGLE_LOGGED = 'TOGGLE-LOGGED';

const initialState = {
  userData: {
    id: null,
    login: null,
    email: null,
  },
  isLogged: false
}

export default function authReducer(state = initialState, action) {
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
  return async (dispatch) => {
    let response = await authAPI.getUserData();

    if (response.resultCode === 0) {
      dispatch(setUserData(response.data))
      dispatch(setLoggedStatus(true))
    }
  }
}

export const loginUser = (login, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.loginUser(login, password, rememberMe);

    if (response.resultCode === 0) {
      dispatch(getUserInfo())
    } else {
      let msg = response.messages.length > 0 ? response.messages[0] : "Some error"
      dispatch(stopSubmit("login", {_error: msg}));
    }
  }
}

export const logOut = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();

    if (response.resultCode === 0) {
      dispatch(setUserData(null, null, null))
      dispatch(setLoggedStatus(false))
    }
  }
}