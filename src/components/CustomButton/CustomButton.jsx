import React from 'react';
import './style.scss';

function CustomButton({ text, type }) {
  return <button className={`button button--${type}`}>{text}</button>;
}

export default CustomButton;
