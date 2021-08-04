import Users from "./Users";
import {connect} from "react-redux";

import {followAC, setUsersAC, unFollowAC, changeCurrentPageAC, setTotalCountAC} from "../../redux/user-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    itemsPerPage: state.usersPage.itemsPerPage,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    changeCurrentPage: (page) => {
      dispatch(changeCurrentPageAC(page))
    },
    setTotalCount: (total) => {
      dispatch(setTotalCountAC(total))
    }
  }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;
