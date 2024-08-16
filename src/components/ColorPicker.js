import React from 'react';
import { ChromePicker } from 'react-color';

function ColorPicker({ color, onColorChange }) {
  return (
    <div className="color-picker">
      <ChromePicker
        color={color}
        onChangeComplete={(newColor) => onColorChange(newColor.hex)}
      />
    </div>
  );
}

export default ColorPicker;
