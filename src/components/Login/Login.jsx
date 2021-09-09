import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";

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

const Login = (props) => {
  const onSubmit = (formData) => {
    let {login, password, rememberMe} = formData
    props.loginUser(login, password, rememberMe)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

let mapStateToProps = () => ({})

export default connect(mapStateToProps, {
  loginUser
})(Login);