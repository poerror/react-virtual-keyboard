import React, { Component } from 'react';
import Key from './Key';
import './Keyboard.css';

class Keyboard extends Component {

  render() {
    return (
      <div className="keyboard">
        <div className="row">
          <Key value="§" />
          <Key value="1" />
          <Key value="2" />
          <Key value="3" />
          <Key value="4" />
          <Key value="5" />
          <Key value="6" />
          <Key value="7" />
          <Key value="8" />
          <Key value="9" />
          <Key value="0" />
          <Key value="-" />
          <Key value="=" />
          <Key value="delete" type="delete" />
        </div>
        <div className="row">
          <Key value="tab" type="tab" />
          <Key value="q" />
          <Key value="w" />
          <Key value="e" />
          <Key value="r" />
          <Key value="t" />
          <Key value="y" />
          <Key value="u" />
          <Key value="i" />
          <Key value="o" />
          <Key value="p" />
          <Key value="[" />
          <Key value="]" />
          <Key value="'\'" />
        </div>
        <div className="row">
          <Key value="capslock" type="capslock" />
          <Key value="a" />
          <Key value="s" />
          <Key value="d" />
          <Key value="f" />
          <Key value="g" />
          <Key value="h" />
          <Key value="j" />
          <Key value="k" />
          <Key value="l" />
          <Key value=";" />
          <Key value="'" />
          <Key value="return" type="return" />
        </div>
        <div className="row">
          <Key value="shift" type="shift" />
          <Key value="`" />
          <Key value="z" />
          <Key value="x" />
          <Key value="c" />
          <Key value="v" />
          <Key value="b" />
          <Key value="n" />
          <Key value="m" />
          <Key value="," />
          <Key value="." />
          <Key value="/" />
          <Key value="shift" type="shift" />
        </div>
        <div className="row">
          <Key value="fn" />
          <Key value="ctrl" />
          <Key value="option" />
          <Key value="cmd" />
          <Key value="spacebar" type="spacebar" />
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
