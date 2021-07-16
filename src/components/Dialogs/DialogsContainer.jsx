import React from "react";
import { updateNewMessageText, addMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState();

  const addAnswer = () => {
    props.store.dispatch(addMessageText())
  }

  const updateMessageText = (text) => {
    props.store.dispatch( updateNewMessageText(text) )
  }

  return (
    <Dialogs
      updateMessageText={updateMessageText}
      addAnswer={addAnswer}
      dialogsData={state.dialogs.dialogsData}
      messagesData={state.dialogs.messagesData}
    />)
}

export default DialogsContainer;