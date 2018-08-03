import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
    constructor() {
        super();
        global.ip = 'http://localhost:1337/parse/functions/';
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">See your projects</h1>
          <h2 className="App-title">React application</h2>
        </header>
        <p className="App-intro">
            If you do not have an account, please click on sign up!
        </p>

          <p className="App-intro">
              If you have an account, just log in!
          </p>
      </div>
    );
  }
}

export default App;
