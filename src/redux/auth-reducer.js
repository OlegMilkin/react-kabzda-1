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
        userData: {...action.data}
      }
    case TOGGLE_LOGGED:
      return {
        ...state,
        isLogged: true
      }
    default:
      return state
  }
}

export const setUserData = (data) => ({
    type: SET_USER_DATA,
    data
})

export const setLoggedStatus = () => ({
  type: TOGGLE_LOGGED
})