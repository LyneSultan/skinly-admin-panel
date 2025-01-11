import React from 'react';
import './style.css';

const BasicButton = ({ title, onClick }) => {
  return (
    <button className="basic-button" onClick={onClick || (() => {})}>
      {title}
    </button>
  );
};

export default BasicButton;
