import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Success = () => {
  return (
    <MuiThemeProvider>
      <div>
        <AppBar title="Registration Successful!" />
        <br />
        <h1>Thank you!</h1>
        <p>
          Please verify your email address, you should have received an email from us
          already
        </p>
      </div>
    </MuiThemeProvider>
  );
};

export default Success;
