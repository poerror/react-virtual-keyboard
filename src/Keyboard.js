import React, { Component } from 'react';
import Key from './Key';
import keyboardLayout from './keyboardLayout';
import keyCodes from './keyCodes';
import './Keyboard.css';

class Keyboard extends Component {

  keyPressedHandler = (value, code) => {
    this.props.keyPressed(value, code);
  }

  codeToValue = (keyCode) => {
    const newKey = keyCodes[keyCode][this.props.currentState];
    return (newKey !== undefined) ? newKey : keyCodes[keyCode]['default'];
  }

  codeToName = (keyCode) => {
    const newKey = keyCodes[keyCode]['name'];
    return (newKey !== undefined) ? newKey : null;
  }

  render() {
    return (
      <div className="keyboard">

        <div className="row">
          {keyboardLayout[1].map((keyCode, i) => (
            <Key
              key={i}
              code={keyCode}
              name={this.codeToName(keyCode)}
              value={this.codeToValue(keyCode)}
              keyPressed={this.keyPressedHandler}
              currentKey={this.props.currentKey}
              currentState={this.props.currentState} />
          ))}
        </div>

        <div className="row">
          {keyboardLayout[2].map((keyCode, i) => (
            <Key
              key={i}
              code={keyCode}
              name={this.codeToName(keyCode)}
              value={this.codeToValue(keyCode)}
              keyPressed={this.keyPressedHandler}
              currentKey={this.props.currentKey}
              currentState={this.props.currentState} />
          ))}
        </div>

        <div className="row">
          {keyboardLayout[3].map((keyCode, i) => (
            <Key
              key={i}
              code={keyCode}
              name={this.codeToName(keyCode)}
              value={this.codeToValue(keyCode)}
              keyPressed={this.keyPressedHandler}
              currentKey={this.props.currentKey}
              currentState={this.props.currentState} />
          ))}
        </div>

        <div className="row">
          {keyboardLayout[4].map((keyCode, i) => (
            <Key
              key={i}
              code={keyCode}
              name={this.codeToName(keyCode)}
              value={this.codeToValue(keyCode)}
              keyPressed={this.keyPressedHandler}
              currentKey={this.props.currentKey}
              currentState={this.props.currentState} />
          ))}
        </div>

        <div className="row">
          {keyboardLayout[5].map((keyCode, i) => (
            <Key
              key={i}
              code={keyCode}
              name={this.codeToName(keyCode)}
              value={this.codeToValue(keyCode)}
              keyPressed={this.keyPressedHandler}
              currentKey={this.props.currentKey}
              currentState={this.props.currentState} />
          ))}
        </div>
      </div>
    );
  }
}

export default Keyboard;
