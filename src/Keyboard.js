import React, { Component } from 'react';
import Key from './Key';
import keyboardLayout from './keyboardLayout';
import './Keyboard.css';

class Keyboard extends Component {

  keyPressedHandler = (value, type) => {
    this.props.keyPressed(value, type);
  }

  currentKey = (key) => {
    const newKey = keyboardLayout[key][this.props.currentState];
    return (newKey === undefined) ? keyboardLayout[key]['default'] : newKey ;
  }

  render() {
    return (
      <div className="keyboard">
        <div className="row">
          {['§','1','2','3','4','5','6','7','8','9','0','-','='].map(key => (
            <Key key={key} value={this.currentKey(key)} keyPressed={this.keyPressedHandler} />
          ))}
          <Key name="delete" type="delete" keyPressed={this.keyPressedHandler} />
        </div>
        <div className="row">
          <Key value="&#09;" name="tab" type="tab" keyPressed={this.keyPressedHandler} />
          {['q','w','e','r','t','y','u','i','o','p','[',']','\\'].map(key => (
            <Key key={key} value={this.currentKey(key)} keyPressed={this.keyPressedHandler} />
          ))}
        </div>
        <div className="row">
          <Key name="capslock" type="capslock" keyPressed={this.keyPressedHandler} active={(this.props.currentState === 'capslock')} />
          {['a','s','d','f','g','h','j','k','l',';',"'"].map(key => (
            <Key key={key} value={this.currentKey(key)} keyPressed={this.keyPressedHandler} />
          ))}
          <Key value="&#10;" name="return" keyPressed={this.keyPressedHandler} type="return" />
        </div>
        <div className="row">
          <Key name="shift" type="shift" keyPressed={this.keyPressedHandler} active={(this.props.currentState === 'shift')} />
          {['`','z','x','c','v','b','n','m',',','.','/'].map(key => (
            <Key key={key} value={this.currentKey(key)} keyPressed={this.keyPressedHandler} />
          ))}
          <Key value="shift" type="shift" keyPressed={this.keyPressedHandler} active={(this.props.currentState === 'shift')} />
        </div>
        <div className="row">
          {['fn','ctrl','alt','cmd'].map(key => (
            <Key key={key} name={key} keyPressed={this.keyPressedHandler} type={key} active={(this.props.currentState === key)} />
          ))}
          <Key value="&nbsp;" name="spacebar" keyPressed={this.keyPressedHandler} type="spacebar" />
          {['cmd', 'alt'].map(key => (
            <Key key={key} name={key} keyPressed={this.keyPressedHandler} type={key} active={(this.props.currentState === key)} />
          ))}
          <div className="navigations">
            <div className="navigations-top">
              <Key value="▲" type="navigation top" />
            </div>
            <div className="navigations-bottom">
              <Key value="◀" type="navigation" />
              <Key value="▼" type="navigation" />
              <Key value="▶" type="navigation" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Keyboard;
