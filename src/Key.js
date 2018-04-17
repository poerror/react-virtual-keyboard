import React, { Component } from 'react';
import './Key.css';

class Key extends Component {

  keyPressedHandler = () => {
    const value = this.props.value;
    const type = this.props.type ? this.props.type : 'char';
    this.props.keyPressed(value, type);
  }

  render() {
    const name = this.props.name ? this.props.name : this.props.value;
    return (
      <a
        onClick={this.keyPressedHandler}
        className={['key', this.props.type].join(' ')}>{name}</a>
    );
  }
}

export default Key;
