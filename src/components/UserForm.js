import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import PrivacyDetails from "./PrivacyDetails";
import Success from "./Success";
import { Field, reduxForm } from "redux-form";

export class UserForm extends Component {
  state = {
    step: 1,
    name: "",
    role: "",
    email: "",
    password: "",
    marketingUpdates: false,
    marketingCommunications: false
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle field change
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  // Handle checkboxes
  handleMarketingUpdates = () => {
    this.setState({ marketingUpdates: !this.state.marketingUpdates });
  };

  // Handle checkboxes
  handleMarketingComm = () => {
    this.setState({
      marketingCommunications: !this.state.marketingCommunications
    });
  };

  // Handle Submit
  submit = event => {
    event.preventDefault();
    // Do something with this object data and then...
    this.props.nextStep();
  };

  render() {
    const {
      step,
      name,
      role,
      email,
      password,
      marketingUpdates,
      marketingCommunications
    } = this.state;
    const values = {
      name,
      role,
      email,
      password,
      marketingUpdates,
      marketingCommunications
    };

    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PrivacyDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleSubmit={this.handleSubmit}
            values={this.props.values}
          />
        );
      case 3:
        return <Success />;
    }
  }
}

export default UserForm;
