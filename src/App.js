import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom"
import { postsData, dialogsData, messagesData } from './index';

const App = () => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='content'>
            <Route path='/profile'>
              <Profile postsData={postsData} />
            </Route>
            <Route path='/dialogs'>
              <Dialogs dialogsData={dialogsData} messagesData={messagesData} />
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