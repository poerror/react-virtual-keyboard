import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {

  screenChangedHandler = (event) => {
    this.props.screenChanged(event);
  }

  render() {
    return (
      <textarea
        onChange={this.screenChangedHandler}
        className="screen" value={this.props.text}></textarea>
    );
  }
}

export default Screen;
