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
  activePage: 1,
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
        activePage: action.page
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

export const changeCurrentPage = (page) => (
  {
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

export const getUsers = (itemsPerPage, activePage) => {
  return async (dispatch) => {
    let response = await usersAPI.getUsers(itemsPerPage, activePage);

    dispatch(setUsers(response.items))
    dispatch(setTotalCount(response.totalCount))
    dispatch(changeCurrentPage(activePage))
    dispatch(toggleLoader(false));
  }
}

export const follow = (userId) => {
  return async (dispatch) => {
    toggleFollowingProgress(true, userId)

    await usersAPI.follow(userId);
    dispatch(acceptFollow(userId))
    toggleFollowingProgress(false, userId)
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))

    await usersAPI.unfollow(userId)
    dispatch(acceptUnfollow(userId))
    dispatch(toggleFollowingProgress(false, userId))
  }
}

export default userReducer;