import React, { Component } from 'react';
import './Key.css';

class Key extends Component {

  keyPressedHandler = () => {
    const value = this.props.value ? this.props.value : '';
    const type = this.props.type ? this.props.type : 'char';
    this.props.keyPressed(value, type);
  }

  render() {
    const name = this.props.name ? this.props.name : this.props.value;
    const activeClass = this.props.active ? 'active' : null;
    return (
      <a
        onClick={this.keyPressedHandler}
        className={['key', this.props.type, activeClass].join(' ')}>{name}</a>
    );
  }
}

export default Key;
