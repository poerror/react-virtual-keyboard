import React, { Component } from 'react';
import Key from './Key';
import './Keyboard.css';

class Keyboard extends Component {

  keyPressedHandler = (value, type) => {
    this.props.keyPressed(value, type);
  }

  render() {
    return (
      <div className="keyboard">
        <div className="row">
          {/* // TODO: repeated keys, possible use array as ['§', '1', '2'...]/map...  */}
          <Key value="§" keyPressed={this.keyPressedHandler} />
          <Key value="1" keyPressed={this.keyPressedHandler} />
          <Key value="2" keyPressed={this.keyPressedHandler} />
          <Key value="3" keyPressed={this.keyPressedHandler} />
          <Key value="4" keyPressed={this.keyPressedHandler} />
          <Key value="5" keyPressed={this.keyPressedHandler} />
          <Key value="6" keyPressed={this.keyPressedHandler} />
          <Key value="7" keyPressed={this.keyPressedHandler} />
          <Key value="8" keyPressed={this.keyPressedHandler} />
          <Key value="9" keyPressed={this.keyPressedHandler} />
          <Key value="0" keyPressed={this.keyPressedHandler} />
          <Key value="-" keyPressed={this.keyPressedHandler} />
          <Key value="=" keyPressed={this.keyPressedHandler} />
          <Key value="delete" type="delete" />
        </div>
        <div className="row">
          <Key value="&#09;" name="tab" type="tab" keyPressed={this.keyPressedHandler} />
          <Key value="q" keyPressed={this.keyPressedHandler} />
          <Key value="w" keyPressed={this.keyPressedHandler} />
          <Key value="e" keyPressed={this.keyPressedHandler} />
          <Key value="r" keyPressed={this.keyPressedHandler} />
          <Key value="t" keyPressed={this.keyPressedHandler} />
          <Key value="y" keyPressed={this.keyPressedHandler} />
          <Key value="u" keyPressed={this.keyPressedHandler} />
          <Key value="i" keyPressed={this.keyPressedHandler} />
          <Key value="o" keyPressed={this.keyPressedHandler} />
          <Key value="p" keyPressed={this.keyPressedHandler} />
          <Key value="[" keyPressed={this.keyPressedHandler} />
          <Key value="]" keyPressed={this.keyPressedHandler} />
          <Key value="&#92;" keyPressed={this.keyPressedHandler} />
        </div>
        <div className="row">
          <Key value="capslock" type="capslock" />
          <Key value="a" keyPressed={this.keyPressedHandler} />
          <Key value="s" keyPressed={this.keyPressedHandler} />
          <Key value="d" keyPressed={this.keyPressedHandler} />
          <Key value="f" keyPressed={this.keyPressedHandler} />
          <Key value="g" keyPressed={this.keyPressedHandler} />
          <Key value="h" keyPressed={this.keyPressedHandler} />
          <Key value="j" keyPressed={this.keyPressedHandler} />
          <Key value="k" keyPressed={this.keyPressedHandler} />
          <Key value="l" keyPressed={this.keyPressedHandler} />
          <Key value=";" keyPressed={this.keyPressedHandler} />
          <Key value="'" keyPressed={this.keyPressedHandler} />
          <Key value="&#10;" name="return" keyPressed={this.keyPressedHandler} type="return" />
        </div>
        <div className="row">
          <Key value="shift" type="shift" />
          <Key value="`" keyPressed={this.keyPressedHandler} />
          <Key value="z" keyPressed={this.keyPressedHandler} />
          <Key value="x" keyPressed={this.keyPressedHandler} />
          <Key value="c" keyPressed={this.keyPressedHandler} />
          <Key value="v" keyPressed={this.keyPressedHandler} />
          <Key value="b" keyPressed={this.keyPressedHandler} />
          <Key value="n" keyPressed={this.keyPressedHandler} />
          <Key value="m" keyPressed={this.keyPressedHandler} />
          <Key value="," keyPressed={this.keyPressedHandler} />
          <Key value="." keyPressed={this.keyPressedHandler} />
          <Key value="/" keyPressed={this.keyPressedHandler} />
          <Key value="shift" type="shift" />
        </div>
        <div className="row">
          <Key value="fn" />
          <Key value="ctrl" />
          <Key value="option" />
          <Key value="cmd" />
          <Key value=" " name="spacebar" keyPressed={this.keyPressedHandler} type="spacebar" />
          <Key value="cmd" />
          <Key value="alt" />
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
