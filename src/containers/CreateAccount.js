import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as sessionActions from '../actions/sessionActions';

class CreateAccount extends Component {

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
    this.props.actions.createAndLogInUser(_.omit(values, ['passwordConf']), this.props.history.history)
  }

  onCancel = () => {
    this.props.actions.resetSession()
    this.props.history.history.push("/")
  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <div id="create-account-page">
        <form id="create-account-form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="First Name"
            name="first_name"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Last Name"
            name="last_name"
            type="text"
            component={this.renderField}
          />
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
          <Field
            label="Confirm Password"
            name="passwordConf"
            type="password"
            component={this.renderField}
          />
        <button id="create-account-submit" className="btn btn-dark" type="submit">Create</button>
          <button id="create-account-cancel" className="btn btn-dark" onClick={this.onCancel}>Cancel</button>
        </form>
        {this.props.session === "ERROR" ? <p>Please enter valid info</p> : null}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

function mapStateToProps(state){
  return { session: state.session }
}

export default reduxForm({
  form: 'CreateAccount'
})(
  connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
);
