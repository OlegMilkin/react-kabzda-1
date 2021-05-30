import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.item + ' ' + classes.active}>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs/2">Oleg</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs/3">Sasha</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs/4">Ruben</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How is your IT?</div>
        <div className={classes.message}>YO</div>
      </div>
    </div>
  )
}

export default Dialogs;