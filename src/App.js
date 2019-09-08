import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import styled, { css } from 'styled-components';

import UserForm from './components/UserForm';
function App() {
  return (
    <Wrapper>
      <Provider store={store}>
        <div className="App">
          <UserForm />
        </div>
      </Provider>
    </Wrapper>
  );
}

const icon = css`
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const paperPlane = css`
  ${icon}
  content: '\f1d8';
`;

const plus = css`
  ${icon}
  content: '\f067';
`;

const exclamation = css`
  ${icon}
  content: '\f06a';
`;

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnDefault = css`
  ${btn('#ffffff', '#d5d5d5')}
  color: #555;
`;

const btnPrimary = btn('#4f93ce', '#285f8f');

const Wrapper = styled.div`
  padding: 20px;
  form {
    border: 1px solid #eee;
    border-radius: 3px;
    & > div {
      // row
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin: 0;
      padding: 10px 20px;
      &.active {
        background-color: #ee9;
      }
      &.error {
        background-color: #e99;
        &.active {
          background-color: #e99;
        }
      }
      & > label {
        width: 7em;
        padding: 5px;
        font-weight: bold;
        color: #444;
      }
      & > span {
        &:before {
          ${exclamation} margin-right: 5px;
        }
        white-space: nowrap;
        color: #600;
        font-weight: bold;
        padding: 5px;
        margin-left: 5px;
      }
    }
    input,
    textarea,
    select {
      flex: 1;
      padding: 5px 8px;
      border: 1px solid #ddd;
      border-radius: 2px;
    }
    button {
      margin: 10px;
      &[type='button'] {
        ${btnDefault};
      }
      &[type='submit'] {
        ${btnPrimary};
        &:before {
          ${paperPlane} margin-right: 5px;
        }
      }
      &.submitting {
        cursor: wait !important;
      }
      &.add {
        &:before {
          ${plus};
          margin-right: 5px;
        }
      }
    }
  }
`;

export default App;
