import React from 'react';
import './Key.css';

const key = ({ value, type }) => (
  <a className={['key', type].join(' ')}>{value}</a>
)

export default key;
