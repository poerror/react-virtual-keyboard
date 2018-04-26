import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {

  render() {
    return (
      <pre
        className="screen">{this.props.text}</pre>
    );
  }
}

export default Screen;
