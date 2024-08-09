// src/components/FrameSelector.js
import React from 'react';

function FrameSelector({ onSelectFrame }) {
  const frameTypes = ['frame1', 'frame2', 'frame3', 'frame4'];

  return (
    <div>
      <h2>Select Frame Type</h2>
      {frameTypes.map((type) => (
        <button key={type} onClick={() => onSelectFrame(type)}>
          {type}
        </button>
      ))}
    </div>
  );
}

export default FrameSelector;
