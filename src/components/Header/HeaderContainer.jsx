import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {



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
    logOut
  })(HeaderContainer);