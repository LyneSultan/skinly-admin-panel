import React from 'react';
import './style.css';

const Button = ({ title, onClick }) => {
  return (
    <button className="basic-button" onClick={onClick || (() => {})}>
      {title}
    </button>
  );
};

export default Button;
