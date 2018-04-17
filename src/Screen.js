import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {

  componentDidUpdate() {
    this.nameInput.focus();
  }

  screenChangedHandler = (event) => {
    this.props.screenChanged(event);
  }

  render() {
    return (
      <textarea
        ref={(textarea) => { this.nameInput = textarea; }}
        onChange={this.screenChangedHandler}
        className="screen" value={this.props.text}></textarea>
    );
  }
}

export default Screen;
