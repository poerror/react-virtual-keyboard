import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {

  render() {
    return (
      <textarea className="screen" value={this.props.text}></textarea>
    );
  }
}

export default Screen;
