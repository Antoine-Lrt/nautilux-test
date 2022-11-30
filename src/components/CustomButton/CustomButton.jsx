import React from 'react';

import './style.scss';

function CustomButton({ text, type, route, btnType }) {
  return (
    <button type={btnType} className={`button button--${type}`}>
      {text}
    </button>
  );
}

export default CustomButton;
