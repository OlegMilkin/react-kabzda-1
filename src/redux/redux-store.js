import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import userReducer from "./user-reducer";

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: userReducer
})

let store = createStore(reducers);

window.store = store;

export default store;