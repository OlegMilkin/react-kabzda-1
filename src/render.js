import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updatePostText, updateMessageText, addMessageText } from './redux/state';

export let rerenderTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updatePostText={updatePostText}
      updateMessageText={updateMessageText}
      addMessageText={addMessageText}
    />,
    document.getElementById('root')
  );
}
