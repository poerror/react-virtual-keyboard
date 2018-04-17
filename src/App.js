import React, { Component } from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Screen />
        <Keyboard />
      </div>
    );
  }
}

export default App;
