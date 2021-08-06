const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_LOADER = 'TOGGLE-LOADER';

let initialState = {
  users: [],
  itemsPerPage: 20,
  totalCount: 0,
  currentPage: 1,
  isLoading: true
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(
          u => {
            if (u.id === action.userID) {
              return {...u, followed: true}
            }
            return u;
          }
        )
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(
          (u) => {
            if (u.id === action.userID) {
              return {...u, followed: false}
            }
            return u;
          }
        )
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.total
      }
    case TOGGLE_LOADER:
    return {
      ...state,
      isLoading: action.isLoading
    }
    default:
      return state;
  }
}

export const followAC = (userID) => ({
  type: FOLLOW,
  userID
})

export const unFollowAC = (userID) => ({
  type: UNFOLLOW,
  userID
})

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
})

export const changeCurrentPageAC = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page
})

export const setTotalCountAC = (total) => ({
  type: SET_TOTAL_COUNT,
  total
})

export const toggleLoaderAC = (isLoading) => ({
  type: TOGGLE_LOADER,
  isLoading
})

export default userReducer;