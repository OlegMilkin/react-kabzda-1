import {rerenderTree} from '../render.js';

let state = {
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
}

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profile.newPostText,
    likes: 0
  }

  state.profile.postsData.push(newPost)
  state.profile.newPostText = '';
  rerenderTree(state)
}

export let updatePostText = (postText) => {
  state.profile.newPostText = postText
  rerenderTree(state)
}

export let updateMessageText = (msgText) => {
  state.dialogs.messageText = msgText
  rerenderTree(state)
}

export let addMessageText = () => {
  let newMessage = {
    id: '4',
    message: state.dialogs.messageText
  }
  state.dialogs.messagesData.push(newMessage)
  state.dialogs.messageText = ''
  rerenderTree(state)
}

export default state;