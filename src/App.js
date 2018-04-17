import React, { Component } from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  keyPressedHandler = (value, type) => {
    console.log(type);
    this.setState((prevState, props) => ({
      text: prevState.text + value
    }));
    // TODO: prepared for key functions
    // switch (type) {
    //   case 'char':
    //     this.setState((prevState, props) => ({
    //       text: prevState.text + value
    //     }));
    //     break;
    //   case 'delete':
    //     this.setState((prevState, props) => ({
    //       text: prevState.text + value
    //     }));
    //     break;
    //   default:
    // }
  }

  render() {
    return (
      <div className="container">
        <Screen text={this.state.text} />
        <Keyboard keyPressed={this.keyPressedHandler} />
      </div>
    );
  }
}

export default App;
