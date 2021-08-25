import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import {Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar state={store.getState().sidebar} />
          <div className='content'>
            <Route path='/profile/:userId?' component={ProfileContainer}/>
            <Route path='/dialogs'>
              <DialogsContainer
                store={store}
              />
            </Route>
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/users' component={UsersContainer}/>
            <Route path='/login' component={Login}/>
          </div>
        </div>
      </BrowserRouter>
    )
}

export default App;