import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from "material-ui/Checkbox";

export class PrivacyDetails extends Component {
  submit = event => {
    event.preventDefault();
    console.log(this.props.values);
    // Do something with this object data and then...
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { pristine, submitting } = this.props;
    const label1 =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    const label2 =
      "Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever ";
    return (
      <form>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Set Privacy Options" />
            <br />
            <div>
              <Field name="updates" component={renderCheckbox} label={label1} />
            </div>
            <div>
              <Field
                name="communication"
                component={renderCheckbox}
                label={label2}
              />
            </div>
            <br />
            <div>
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={this.back}
              >
                BACK
              </button>
              <button
                type="submit"
                disabled={pristine || submitting}
                onClick={this.submit}
              >
                Submit
              </button>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </form>
    );
  }
}

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const styles = {
  button: {
    margin: 15
  }
};

PrivacyDetails = reduxForm({
  form: "marketing",
  destroyOnUnmount: false
})(PrivacyDetails);

export default PrivacyDetails;
