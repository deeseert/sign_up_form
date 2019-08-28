import React from 'react';
import './App.css';
import { Provider } from 'redux';
import store from './store'


import UserForm from './components/UserForm';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserForm />
    </div>
    </Provider>
  );
}

export default App;
