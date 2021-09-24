import {connect} from "react-redux";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/user-reducer";
import React from "react";
import Users from "./Users";
import spinner from "../common/Loader/spinner.gif";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    itemsPerPage: state.usersPage.itemsPerPage,
    totalCount: state.usersPage.totalCount,
    activePage: state.usersPage.activePage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

class UsersAPI extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.itemsPerPage, this.props.activePage);
  }

  onPageChanged = (page) => {
    this.props.getUsers(this.props.itemsPerPage, page);

  }

  render() {
    return (
      <>
        {
          this.props.isLoading
            ? <img
              src={spinner}
              alt="loading"
              style={{position: 'absolute', top: '50%', left: '50%', marginLeft: '-32px', marginTop: '-32px'}}
            />
            : <Users
              users={this.props.users}
              totalCount={this.props.totalCount}
              itemsPerPage={this.props.itemsPerPage}
              onPageChanged={this.onPageChanged}
              activePage={this.props.activePage}
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
    toggleFollowingProgress,
    getUsers,
  }
)(UsersAPI);

export default UserContainer;
