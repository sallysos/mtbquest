import React from 'react';
import './NextButton.css';

function NextButton({ onClick }) {
  return (
    <button className="next-button" onClick={onClick}>
      Next
    </button>
  );
}

export default NextButton;
