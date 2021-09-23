import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser, logOut} from "../../redux/auth-reducer";
import { required } from '../../helpers/validators';
import { renderField } from '../../helpers/validators';
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          component={renderField}
          name={"login"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          component={renderField}
          name={"password"}
          type={"password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={renderField}
          type={"checkbox"}
          name={"rememberMe"}
          validate={[required]}
        />
        remember me
      </div>
      { error &&
        <div style={{ border: "1px solid red" }}>
          { error }
        </div>
      }
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

  if (props.isLogged) {
    return <Redirect to={"/profile"}/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged
})

export default connect(mapStateToProps, {
  loginUser,
  logOut
})(Login);