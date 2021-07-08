import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state'

let rerenderTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={store.addPost.bind(store)}
      updatePostText={store.updatePostText.bind(store)}
      updateMessageText={store.updateMessageText.bind(store)}
      addMessageText={store.addMessageText.bind(store)}
    />,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subsribe(rerenderTree)
