// src/components/Bike.js
import React from 'react';

function Bike({ frameType, frameColor, gearColors }) {
  return (
    <div>
      <img src={`images/${frameType}-${frameColor}.png`} alt="Bike Frame" />
      {Object.entries(gearColors).map(([gear, color]) => (
        <img key={gear} src={`images/${gear}-${color}.png`} alt={gear} />
      ))}
    </div>
  );
}

export default Bike;
