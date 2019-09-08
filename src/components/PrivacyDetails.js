import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Checkbox from 'material-ui/Checkbox';
import Typography from '@material-ui/core/Typography';

export class PrivacyDetails extends Component {
  submit = (event) => {
    event.preventDefault();
    this.props.nextStep();
    console.log(this.props.userDetails);
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { pristine, submitting } = this.props;
    const label2 =
      'Receive communication by email for other products created by Tray.io team';
    return (
      <form>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Set Privacy Options" />
            <br />
            <Typography align="left">
              <div>
                <Field
                  name="updates"
                  component={renderCheckbox}
                  label={<CustomLabel style={styles.label} />}
                />
              </div>
              <div>
                <Field
                  id="checkbox"
                  name="communication"
                  component={renderCheckbox}
                  label={label2}
                />
              </div>
            </Typography>
            <br />
            <div>
              <button style={styles.button} className="btn btn-info" onClick={this.back}>
                BACK
              </button>
              <button
                disabled={pristine || submitting}
                className="btn btn-success"
                onClick={this.submit}
              >
                SUBMIT
              </button>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </form>
    );
  }
}

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label} checked={input.value ? true : false} onCheck={input.onChange} />
);

const CustomLabel = () => {
  return (
    <label style={styles.label}>Receive updates about Tray.io product by email</label>
  );
};

const styles = {
  button: { margin: 15 },
  label: { align: 'left' },
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.form.userDetails.values,
  };
};

PrivacyDetails = reduxForm({
  form: 'userDetails',
  destroyOnUnmount: false,
})(connect(mapStateToProps)(PrivacyDetails));

export default PrivacyDetails;
