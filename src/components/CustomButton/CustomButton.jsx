import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function CustomButton({ text, type, route }) {
  return (
    <Link to={`${route}`}>
      <button className={`button button--${type}`}>{text}</button>
    </Link>
  );
}

export default CustomButton;
