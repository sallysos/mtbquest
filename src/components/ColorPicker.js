import React from 'react';
import './ColorPicker.css';

function ColorPicker({ part, onColorChange }) {
  const colors = [
    { name: 'Black', hex: '#28282B' },
    { name: 'Silver', hex: '#BCC6CC' },
    { name: 'Grey', hex: '#9E9E9E' },
    { name: 'Gold', hex: '#D4AF37' },
    { name: 'Red', hex: '#E53935' },
    { name: 'Blue', hex: '#2962FF' },
    { name: 'Green', hex: '#00C853' },
    { name: 'Purple', hex: '#B100CD' },
    { name: 'Orange', hex: '#E88504' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Beige', hex: '#D7CCC8' },
    { name: 'Pink', hex: '#758D93' },
    { name: 'Metallic', hex: '#BCC6CC' },
    { name: 'Brown', hex: '#5B3E31' },
    { name: 'Turquoise', hex: '#40E0D0' },
    { name: 'Multicolored', hex: 'multicolor' }, // Special case for multicolor
    { name: 'Yellow', hex: '#FFDC2E' },
    { name: 'Reflective', hex: '#F7F7F1' },
    { name: 'Olive', hex: '#708238' },
  ];

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color.name}
          className="color-option"
          style={{ backgroundColor: color.hex !== 'multicolor' ? color.hex : '#FFF' }}
          onClick={() => onColorChange(part, color.hex)}
        >
          {color.name === 'Multicolored' ? 'Multi' : ''}
        </button>
      ))}
    </div>
  );
}

export default ColorPicker;
