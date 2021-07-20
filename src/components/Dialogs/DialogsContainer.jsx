// import React from "react";
import { updateNewMessageText, addMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";

// const DialogsContainer = (props) => {
//
//   let state = props.store.getState();
//
//   const addAnswer = () => {
//     props.store.dispatch(addMessageText())
//   }
//
//   const updateMessageText = (text) => {
//     props.store.dispatch( updateNewMessageText(text) )
//   }
//
//   return (
//     <Dialogs
//       updateMessageText={updateMessageText}
//       addAnswer={addAnswer}
//       dialogsData={state.dialogs.dialogsData}
//       messagesData={state.dialogs.messagesData}
//     />)
// }

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogs.dialogsData,
    messagesData: state.dialogs.messagesData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (text) => {
      dispatch( updateNewMessageText(text) )
    },
    addAnswer: () => {
      dispatch(addMessageText())
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;