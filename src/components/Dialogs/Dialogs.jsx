import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={classes.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

let dialogsData = [
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
]

let messagesData = [
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
]

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = () => {

  const dialogElement = dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  })

  const messageElement = messagesData.map((messageItem) => {
    return <Message message={messageItem.message}/>
  })

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogElement }
      </div>
      <div className={classes.messages}>
        { messageElement }
      </div>
    </div>
  )
}

export default Dialogs;