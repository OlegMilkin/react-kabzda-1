import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state'

let rerenderTree = (store) => {
  ReactDOM.render(
    <App
      state={store._state}
      addPost={store.addPost}
      updatePostText={store.updatePostText}
      updateMessageText={store.updateMessageText}
      addMessageText={store.addMessageText}
    />,
    document.getElementById('root')
  );
}

rerenderTree(store._state)

store.subsribe(rerenderTree)
