import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: userReducer,
  auth: authReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;