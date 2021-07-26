const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
      followed: false,
      fullName: 'Dmitry K.',
      status: 'I am a boss',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 2,
      photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
      followed: true,
      fullName: 'Sasha',
      status: 'Vacationing',
      location: {
        city: 'Moscow',
        country: 'Russia'
      }
    },
    {
      id: 3,
      photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
      followed: false,
      fullName: 'Oleg',
      status: 'meeting',
      location: {
        city: 'Kiev',
        country: 'Ukraine'
      }
    }
  ]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(
          (u) => {
            if (u.id === action.userId) {
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
            if (u.id === action.userId) {
              return {...u, followed: false}
            }
            return u;
          }
        )
      }

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
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

export default userReducer;