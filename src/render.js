import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state'
import { addPost } from './redux/state'

export let rerenderTree = () => {
  ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
}
