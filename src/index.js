import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import {Provider} from "react-redux";

let rerenderTree = (state) => {
  ReactDOM.render(
    <Provider store={}>
      <App
        state={state}
        store={store}
        dispatch={store.dispatch.bind(store)}
      />
    </Provider>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderTree(state)
})
