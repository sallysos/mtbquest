import React from 'react';
import './ReturnButton.css';

function ReturnButton({ onClick }) {
  return (
    <button className="return-button" onClick={onClick}>
      Return
    </button>
  );
}

export default ReturnButton;