import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_LOADER = 'TOGGLE-LOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  users: [],
  itemsPerPage: 20,
  totalCount: 0,
  currentPage: 1,
  isLoading: true,
  followingInProgress: [2, 3],
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
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isLoading
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id !== action.id)
      }
    default:
      return state;
  }
}

export const acceptFollow = (userID) => ({
  type: FOLLOW,
  userID
})

export const acceptUnfollow = (userID) => ({
  type: UNFOLLOW,
  userID
})

export const setUsers = (users) => ({
  type: SET_USERS,
  users
})

export const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page
})

export const setTotalCount = (total) => ({
  type: SET_TOTAL_COUNT,
  total
})

export const toggleLoader = (isLoading) => ({
  type: TOGGLE_LOADER,
  isLoading
})

export const toggleFollowingProgress = (isLoading, id) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isLoading,
  id
})

export const getUsers = (itemsPerPage, currentPage) => {
  return (dispatch) => {
    usersAPI.getUsers(itemsPerPage, currentPage)
      .then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(changeCurrentPage(currentPage))
        dispatch(toggleLoader(false));
      })
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    toggleFollowingProgress(true, userId)

    usersAPI.follow(userId)
      .then(data => {
          dispatch(acceptFollow(userId))
          toggleFollowingProgress(false, userId)
      })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))

    usersAPI.unfollow(userId).then(data => {
      dispatch(acceptUnfollow(userId))
      dispatch(toggleFollowingProgress(false, userId))
    })

  }
}

export default userReducer;