import React, { Component } from "react";
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
    const { values, handleMarketingUpdates, handleMarketingComm } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Set Privacy Options" />
          <br />
          <Checkbox
            label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            onClick={handleMarketingUpdates}
            checked={values.marketingUpdates}
            value="marketingUpdates"
          />
          <br />
          <Checkbox
            label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            onClick={handleMarketingComm}
            checked={values.marketingCommunications}
            value="marketingCommunications"
          />
          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Submit"
            primary={true}
            style={styles.button}
            onClick={this.submit}
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

export default PrivacyDetails;
