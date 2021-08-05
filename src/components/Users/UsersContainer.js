import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, changeCurrentPageAC, setTotalCountAC} from "../../redux/user-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

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

class UsersAPI extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.itemsPerPage}&page=${this.props.currentPage}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.setTotalCount(response.data.totalCount / 100)
        })
    }
  }

  onPageChanged = (page) => {
    this.props.changeCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.itemsPerPage}&page=${page}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render () {
    return (
      <Users
        users={this.props.users}
        totalCount={this.props.totalCount}
        itemsPerPage={this.props.itemsPerPage}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    )
  }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UserContainer;
