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

export let addPost = (postMsg) => {
  let newPost = {
    id: 3,
    message: postMsg,
    likes: 0
  }

  state.profile.postsData.push(newPost)
  rerenderTree()
}

export default state;