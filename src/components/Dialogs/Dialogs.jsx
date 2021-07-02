import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let textareaRef = React.createRef();

  const addAnswer = () => {
    alert(textareaRef.current.value)
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
          <textarea className={classes.answerTextarea} ref={textareaRef}></textarea>
          <button className={classes.answerButton} onClick={ addAnswer }>App Answer</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;