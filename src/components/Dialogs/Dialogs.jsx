import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import DialogReduxForm from "./DialogForm";

const Dialogs = (props) => {

  const dialogElement = props.dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
  })

  const messageElement = props.messagesData.map((messageItem) => {
    return <Message message={messageItem.message} key={messageItem.id}/>
  })

  if(!props.isLogged) {
    return <Redirect to="/login"/>
  }

  const onSubmit = (formData) => {
    props.addAnswer(formData.dialogText)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogElement }
      </div>
      <div className={classes.messages}>
        { messageElement }
        <div className={classes.answerWrapp}>
          <DialogReduxForm onSubmit={onSubmit}/>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;