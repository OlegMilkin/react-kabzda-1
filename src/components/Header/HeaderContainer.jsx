import React from 'react';
import axios from 'axios';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, setLoggedStatus} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    }).then(res => {
      if (res.data.resultCode === 0) {
        this.props.setUserData(res.data.data)
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