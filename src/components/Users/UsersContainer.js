import {connect} from "react-redux";
import {
  followAC,
  setUsersAC,
  unFollowAC,
  changeCurrentPageAC,
  setTotalCountAC,
  toggleLoaderAC
} from "../../redux/user-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import spinner from  "../common/Loader/spinner.gif";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    itemsPerPage: state.usersPage.itemsPerPage,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
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
    },
    toggleLoader: (isLoading) => {
      dispatch(toggleLoaderAC(isLoading))
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
          this.props.toggleLoader(false);
        })
    }
  }

  onPageChanged = (page) => {
    this.props.toggleLoader(true);
    this.props.changeCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.itemsPerPage}&page=${page}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.toggleLoader(false);
      })
  }

  render () {
    return (
      <>
        {
          this.props.isLoading
          ? <img
              src={spinner}
              alt="loading"
              style={{position: 'absolute', top: '50%', left: '50%', marginLeft: '-32px',  marginTop: '-32px'}}
            />
          : <Users
              users={this.props.users}
              totalCount={this.props.totalCount}
              itemsPerPage={this.props.itemsPerPage}
              onPageChanged={this.onPageChanged}
              currentPage={this.props.currentPage}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
          />
        }
      </>
    )
  }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UserContainer;
