import React from "react";
import Users from "./Users";
import {connect} from "react-redux";

import {followAC, setUsersAC, unFollowAC} from "../../redux/user-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
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
    }
  }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;
