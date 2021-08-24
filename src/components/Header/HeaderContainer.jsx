import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, setLoggedStatus} from '../../redux/auth-reducer';
import {authAPI} from '../../api/api';

class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.getUserData().then(data => {
      if (data.resultCode === 0) {
        this.props.setUserData(data.data)
        this.props.setLoggedStatus()
      }
    })
  }

  render() {
    return (
      <Header {...this.props}></Header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
    userName: state.auth.userData.login,
  }
}

export default connect(
  mapStateToProps,
  {
    setUserData,
    setLoggedStatus
  })(HeaderContainer);