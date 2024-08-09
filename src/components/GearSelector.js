// src/components/GearSelector.js
import React from 'react';
import ColorPicker from './ColorPicker';

function GearSelector({ gearName, onColorChange }) {
  return (
    <div>
      <h3>Select Color for {gearName}</h3>
      <ColorPicker onColorChange={(color) => onColorChange(gearName, color)} />
    </div>
  );
}

export default GearSelector;
