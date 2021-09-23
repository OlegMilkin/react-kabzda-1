import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import {getUserInfo} from './redux/auth-reducer';
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import spinner from "./components/common/Loader/spinner.gif";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <img
        src={spinner}
        alt="loading"
      />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar state={store.getState().sidebar}/>
        <div className='content'>
          <Route path='/profile/:userId?' component={ProfileContainer}/>
          <Route path='/dialogs'>
            <DialogsContainer
              store={store}
            />
          </Route>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/users' component={UsersContainer}/>
          <Route path='/login' component={Login}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {
  getUserInfo,
  initializeApp
})(App);