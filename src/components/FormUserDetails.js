import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import isValidEmail from 'sane-email-validation';

let errors;
const validate = (values) => {
  errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid Email';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};
const createRenderer = (render) => ({ input, meta, type, label, ...rest }) => (
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : '',
    ].join(' ')}
  >
    <label>{label}</label>
    {render(input, label, type, rest)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, label, type) => (
  <input {...input} placeholder={label} type={type} />
));

class FormUserDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <form>
        <MuiThemeProvider>
          <AppBar title="Enter User Details" />
        </MuiThemeProvider>
        <br />
        <Field name="fullName" label="Full Name" type="text" component={RenderInput} />
        <br />
        <Field name="role" label="Role" type="text" component={RenderInput} />
        <br />
        <Field name="email" label="Email" type="text" component={RenderInput} />
        <br />
        <Field name="password" type="password" component={RenderInput} label="Password" />
        <br />
        <button
          disabled={
            errors.fullName === 'Required' ||
            errors.email === 'Required' ||
            errors.email === 'Invalid Email' ||
            errors.password === 'Required'
              ? true
              : false
          }
          onClick={this.continue}
          className="btn btn-info"
          style={styles.button}
        >
          CONTINUE
        </button>
      </form>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

FormUserDetails = reduxForm({
  form: 'userDetails',
  destroyOnUnmount: false,
  validate,
})(FormUserDetails);

export default FormUserDetails;
