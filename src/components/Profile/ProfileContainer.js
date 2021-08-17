import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {


  componentDidMount() {

    const {match} = this.props

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${match.params.userId}`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let Test = withRouter(ProfileContainer)

export default connect(mapStateToProps,
  {
    setUserProfile
  }
)(Test);

