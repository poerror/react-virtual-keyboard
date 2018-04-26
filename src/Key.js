import React, { Component } from 'react';
import './Key.css';

class Key extends Component {

  // TODO: Keys are updated all the time, it's not neccessery
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps.currentState);
  // }
  // componentWillReceiveProps(nextProps) {
  //
  // }

  keyPressedHandler = () => {
    this.props.keyPressed(this.props.value, this.props.code);
  }

  render() {
    const keyShowName = this.props.name ? this.props.name : this.props.value;
    let classes = `key key-${this.props.code}`;
    if (this.props.currentKey === this.props.code || this.props.currentState === this.props.value) {
      classes += " active";
    }

    return (
      <a
        onClick={this.keyPressedHandler}
        className={classes}>{keyShowName}</a>
    );
  }
}

export default Key;
