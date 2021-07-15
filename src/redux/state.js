import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
  _state: {
    profile: {
      postsData: [
        {
          id: '1',
          message: 'Hi how are you?',
          likes: '5'
        },
        {
          id: '2',
          message: 'Hello I am post?',
          likes: '10'
        },
      ],
      newPostText: 'hello',
    },
    dialogs: {
      dialogsData: [
        {
          id: '1',
          name: 'Oleg'
        },
        {
          id: '2',
          name: 'Dimych'
        },
        {
          id: '3',
          name: 'Sasha'
        },
        {
          id: '4',
          name: 'Ruben'
        },
      ],
      messagesData: [
        {
          id: '1',
          message: 'Hi'
        },
        {
          id: '2',
          message: 'How is your IT?'
        },
        {
          id: '3',
          message: 'YO'
        },
      ],
      messageText: 'Enter your text please',
    },
    sidebar: {
      friends: [
        {
          id: 0,
          name: 'John',
          link: 'http://link1',
        },
        {
          id: 1,
          name: 'Meth',
          link: 'http://link2',
        },
        {
          id: 2,
          name: 'Alex',
          link: 'http://link3',
        },
      ]
    }
  },
  rerenderTree() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subsribe(observer) {
    this.rerenderTree = observer
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this.rerenderTree(this._state);
  }
}

export default store