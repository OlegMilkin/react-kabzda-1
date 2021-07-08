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
  getState() {
    return this._state;
  },
  rerenderTree() {
    console.log('State changed')
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profile.newPostText,
      likes: 0
    }

    this._state.profile.postsData.push(newPost)
    this._state.profile.newPostText = '';
    this.rerenderTree(this._state)
  },
  updatePostText(postText) {
    this._state.profile.newPostText = postText
    this.rerenderTree(this._state)
  },
  updateMessageText(msgText) {
    this._state.dialogs.messageText = msgText
    this.rerenderTree(this._state)
  },
  addMessageText() {
    let newMessage = {
      id: '4',
      message: this._state.dialogs.messageText
    }
    this._state.dialogs.messagesData.push(newMessage)
    this._state.dialogs.messageText = ''
    this.rerenderTree(this._state)
  },
  subsribe(observer) {
    this.rerenderTree = observer
  },
}

export default store