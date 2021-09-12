import React from 'react'
import { Field, reduxForm } from "redux-form";
import { required } from '../../../helpers/validators';
import { renderField } from '../../../helpers/validators';

const MyPostForm = (props) => {
  const {handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={renderField}
          type="textarea"
          validate={[required]}
        />
      </div>
      <button type="submit">Add post</button>
    </form>
  )
}

export default reduxForm({
  form: 'myPost' // a unique identifier for this form
})(MyPostForm)

