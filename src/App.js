import React, { Component } from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      currentState: 'default'
    }
  }

  screenChangedHandler = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  keyPressedHandler = (value, type) => {
    switch (type) {
      case 'char':
      case 'tab':
      case 'spacebar':
      case 'return':
        this.setState((prevState, props) => ({
          text: prevState.text + value
        }));
        break;
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
      case 'fn':
      this.setState((prevState, props) => ({
        currentState: (prevState.currentState !== type) ? type : 'default'
      }));
        break;
      default:
        throw new Error('Undefined Key Type');
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
          keyPressed={this.keyPressedHandler} />
      </div>
    );
  }
}

export default App;
