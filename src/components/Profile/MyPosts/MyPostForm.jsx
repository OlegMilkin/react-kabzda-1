import React from 'react'
import { Field, reduxForm } from "redux-form";

const MyPostForm = (props) => {
  const {handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea"/>
      </div>
      <button type="submit">Add post</button>
    </form>
  )
}

export default reduxForm({
  form: 'myPost' // a unique identifier for this form
})(MyPostForm)

