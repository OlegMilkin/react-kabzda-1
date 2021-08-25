import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserData} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    const {match} = this.props
    this.props.getUserData(match.params.userId)
  }

  render() {

    if(!this.props.isLogged) {
      return <Redirect to="/login"/>
    }

    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isLogged: state.auth.isLogged,
})

let Test = withRouter(ProfileContainer)

export default connect(mapStateToProps,
  {
    getUserData
  }
)(Test);

