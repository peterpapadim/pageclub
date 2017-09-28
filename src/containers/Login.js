import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';

class Login extends Component {

  renderField = (field) => {
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    )
  }

  onSubmit = (values) => {
    this.props.actions.logInUser(values, this.props.history.history)
  }

  onCancel = () => {
    this.props.actions.resetSession()
    this.props.history.history.push("/")
  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <div id="login-page">
        <form id="login-form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Email"
            name="email"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            component={this.renderField}
          />
          <button id="login-submit" className="btn btn-dark" type="submit">Log In</button>
          <button id="login-cancel" className="btn btn-dark" onClick={this.onCancel}>Cancel</button>
        </form>
        {this.props.session === "ERROR" ? <p>Invalid Email or Password</p> : null}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { session: state.session }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default reduxForm({
  form: 'Login'
})(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
