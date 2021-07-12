const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profile.newPostText,
        likes: 0
      }
      this._state.profile.postsData.push(newPost)
      this._state.profile.newPostText = '';
      this.rerenderTree(this._state)
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profile.newPostText = action.postText
      this.rerenderTree(this._state)
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
      this._state.dialogs.messageText = action.msgText
      this.rerenderTree(this._state)
    } else if (action.type === 'ADD-MESSAGE-TEXT') {
      let newMessage = {
        id: '4',
        message: this._state.dialogs.messageText
      }
      this._state.dialogs.messagesData.push(newMessage)
      this._state.dialogs.messageText = ''
      this.rerenderTree(this._state)
    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: text
  }
}

export const updateNewMessageText = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    msgText: text
  }
}

export const addMessageText = () => {
  return {
    type: ADD_MESSAGE_TEXT
  }
}

export default store