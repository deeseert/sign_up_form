import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Required";
  }
  if (!values.email) {
    errors.email = "Required"
  }
  if (!values.password) {
    errors.password = "Required"
  }

  return errors;
}

export class FormUserDetails extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your Full Name"
            floatingLabelText="Full Name"
            required
            onChange={handleChange("name")}
            defaultValue={values.name}
          />
          <br />
          <TextField
            hintText="Enter Your Role"
            floatingLabelText="Role"
            onChange={handleChange("role")}
            defaultValue={values.role}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <TextField
            hintText="Enter Your Password"
            floatingLabelText="Password"
            type="password"
            onChange={handleChange("password")}
            defaultValue={values.password}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
