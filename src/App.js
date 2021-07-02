import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar state={props.state.sidebar} />
          <div className='content'>
            <Route path='/profile'>
              <Profile state={props.state.profile} addPost={props.addPost}/>
            </Route>
            <Route path='/dialogs'>
              <Dialogs state={props.state.dialogs} />
            </Route>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings} />
          </div>
        </div>
      </BrowserRouter>
    )
}

export default App;