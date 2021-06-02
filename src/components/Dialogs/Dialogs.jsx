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

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name='Oleg' id='1'/>
        <DialogItem name='Dimych' id='2'/>
        <DialogItem name='Sasha' id='3'/>
        <DialogItem name='Ruben' id='4'/>
      </div>
      <div className={classes.messages}>
        <Message message='Hi'/>
        <Message message='How is your IT?'/>
        <Message message='YO'/>
      </div>
    </div>
  )
}

export default Dialogs;