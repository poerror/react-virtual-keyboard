import React, { Component } from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';
import keyCodes from './keyCodes';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      currentState: 'default',
      currentKey: ''
    }
  }

  componentDidMount() {
    window.onkeydown = (e) => {
      const code = e.keyCode ? e.keyCode : e.which;
      this.setState((prevState, props) => ({
        currentKey: code
      }));
      const value = keyCodes[code][this.state.currentState] !== undefined ?
        keyCodes[code][this.state.currentState] :
        keyCodes[code]['default'];
      this.keyPressedHandler(value, code);
    }
    // on key up remove active class button
    window.onkeyup = (e) => {
      this.setState((prevState, props) => ({
        currentKey: ''
      }));
    }
  }

  keyPressedHandler = (value, code) => {
    switch (value) {
      case 'delete':
        this.setState((prevState, props) => ({
          text: prevState.text.slice(0, -1)
        }));
        break;
      case 'shift':
      case 'capslock':
      case 'cmd':
      case 'ctrl':
      case 'alt':
        this.setState((prevState, props) => ({
          currentState: (prevState.currentState !== value) ? value : 'default'
        }));
        break;
      default:
        this.setState((prevState, props) => ({
          text: prevState.text + value
        }));
    }
  }

  render() {
    return (
      <div className="container">
        <Screen
          screenChanged={this.screenChangedHandler}
          text={this.state.text} />
        <Keyboard
          currentState={this.state.currentState}
          currentKey={this.state.currentKey}
          keyPressed={this.keyPressedHandler} />
      </div>
    );
  }
}

export default App;
