import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { addPost } from './redux/state'
import { updatePostText } from "./redux/state";

export let rerenderTree = (state) => {
  ReactDOM.render(<App state={state} addPost={addPost} updatePostText={updatePostText} />, document.getElementById('root'));
}
