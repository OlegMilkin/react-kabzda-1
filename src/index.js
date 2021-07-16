import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';

let rerenderTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      store={store}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderTree(state)
})
