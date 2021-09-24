import React, {Suspense, lazy} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch} from "react-router-dom";
import store from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import {getUserInfo} from './redux/auth-reducer';
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import spinner from "./components/common/Loader/spinner.gif";

const ProfileContainer = lazy(() => import ('./components/Profile/ProfileContainer'));
const News = lazy(() => import ('./components/News/News'));
const Music = lazy(() => import ('./components/Music/Music'));
const Settings = lazy(() => import ('./components/Settings/Settings'));
const UsersContainer = lazy(() => import ('./components/Users/UsersContainer'));
const DialogsContainer = lazy(() => import ('./components/Dialogs/DialogsContainer'));
const Login = lazy(() => import ('./components/Login/Login'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
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
            </Switch>
          </Suspense>
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