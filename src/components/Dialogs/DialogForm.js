import React from "react";
import classes from "./Dialogs.module.css";
import {Field, reduxForm } from "redux-form";
import { required } from '../../helpers/validators';
import { renderField } from '../../helpers/validators';

const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        type="textarea"
        component={renderField}
        name="dialogText"
        className={classes.answerTextarea}
        validate={[required]}
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