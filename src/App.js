import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/forms/LoginForm'
import Signup from './components/forms/Signup'
console.log(' LoginForm ', LoginForm);

class App extends Component {
  render() {
    return (
      <div className="App">
          good 
          <LoginForm/>
         <Signup/>
      </div>
    );
  }
}

export default App;
