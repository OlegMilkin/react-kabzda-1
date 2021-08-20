import {connect} from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  changeCurrentPage,
  setTotalCount,
  toggleLoader,
  toggleFollowingProgress,
} from "../../redux/user-reducer";
import React from "react";
import Users from "./Users";
import spinner from  "../common/Loader/spinner.gif";
import {usersAPI} from "../../api/api";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    itemsPerPage: state.usersPage.itemsPerPage,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

class UsersAPI extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      usersAPI.getUsers(this.props.itemsPerPage, this.props.currentPage)
      .then(data => {
        this.props.setUsers(data.items)
        this.props.setTotalCount(data.totalCount / 100)
        this.props.toggleLoader(false);
      })
    }
  }

  onPageChanged = (page) => {
    this.props.toggleLoader(true);
    this.props.changeCurrentPage(page)
    usersAPI.getUsers(this.props.itemsPerPage, page)
    .then(data => {
      this.props.setUsers(data.items)
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
              followingInProgress={this.props.followingInProgress}
              toggleFollowingProgress={this.props.toggleFollowingProgress}
          />
        }
      </>
    )
  }
}

let UserContainer = connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    setTotalCount,
    toggleLoader,
    toggleFollowingProgress,
  }
)(UsersAPI);

export default UserContainer;
