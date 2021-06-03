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

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

let DialogsData = [
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

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
        <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
      </div>
    </div>
  )
}

export default Dialogs;