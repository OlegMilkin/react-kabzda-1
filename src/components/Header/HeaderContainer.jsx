import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserInfo } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getUserInfo()
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
    getUserInfo
  })(HeaderContainer);