const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {

  if (action.type === UPDATE_MESSAGE_TEXT) {
    state.messageText = action.msgText
  } else if (action.type === ADD_MESSAGE_TEXT) {
    let newMessage = {
      id: '4',
      message: state.messageText
    }
    state.messagesData.push(newMessage);
    state.messageText = '';
  }

  return state;
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