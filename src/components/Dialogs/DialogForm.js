import React from "react";
import classes from "./Dialogs.module.css";
import {Field, reduxForm } from "redux-form";

const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="dialogText"
        className={classes.answerTextarea}
      />
      <button
        className={classes.answerButton}
      >
        App Answer
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'dialogForm' // a unique identifier for this form
})(DialogForm)