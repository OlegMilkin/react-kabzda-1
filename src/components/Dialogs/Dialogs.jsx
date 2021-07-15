import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageText, addMessageText } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

  let textareaRef = React.createRef();

  const addAnswer = () => {
    props.dispatch(addMessageText())
  }

  const updateMessageText = () => {
    props.dispatch( updateNewMessageText(textareaRef.current.value) )
  }

  const dialogElement = props.state.dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
  })

  const messageElement = props.state.messagesData.map((messageItem) => {
    return <Message message={messageItem.message} key={messageItem.id}/>
  })

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogElement }
      </div>
      <div className={classes.messages}>
        { messageElement }
        <div className={classes.answerWrapp}>
          <textarea
            className={classes.answerTextarea}
            ref={textareaRef}
            value={props.state.messageText}
            onChange={updateMessageText}
          />
          <button className={classes.answerButton} onClick={ addAnswer }>App Answer</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;