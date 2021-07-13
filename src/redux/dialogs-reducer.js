const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {

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