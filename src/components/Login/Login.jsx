import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          component={"input"}
          name={"login"}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          component={"input"}
          name={"password"}
          type={"password"}
        />
      </div>
      <div>
        <Field
          component={"input"}
          type={"checkbox"}
          name={"rememberMe"}
        />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login;