// src/App.js
import React, { useState } from 'react';
import FrameSelector from './components/FrameSelector';
import Bike from './components/Bike';
import GearSelector from './components/GearSelector';
import './App.css';

function App() {
  const [frameType, setFrameType] = useState(null);
  const [frameColor, setFrameColor] = useState('red');
  const [gearColors, setGearColors] = useState({});
  const [currentGear, setCurrentGear] = useState(null);

  const gearList = [
    'Fork',
    'Rear Shock',
    'Chainset',
    'Rear Derailleur',
    'Cassette',
    'Gear Shifters',
    'Handle Bar',
    'Stem',
    'Top cap',
    'Grips',
    'Headset',
    'Seatpost',
    'Saddle',
    'Seatpost Quick Release',
    'Pedals',
    'Brake Sets',
    'Chain',
    'Chain Guide',
    'Wheels',
    'Tyres',
  ];

  const handleSelectFrame = (type) => {
    setFrameType(type);
    setCurrentGear(gearList[0]); // Start with the first gear after selecting the frame
  };

  const handleColorChange = (part, color) => {
    if (part === 'frame') {
      setFrameColor(color);
    } else {
      setGearColors((prevColors) => ({
        ...prevColors,
        [part]: color,
      }));
      moveToNextGear(part);
    }
  };

  const moveToNextGear = (currentGear) => {
    const currentIndex = gearList.indexOf(currentGear);
    const nextGear = gearList[currentIndex + 1];
    setCurrentGear(nextGear);
  };

  return (
    <div className="App">
      <h1>MTBQuest: Bike Customization Simulator</h1>
      {!frameType ? (
        <FrameSelector onSelectFrame={handleSelectFrame} />
      ) : currentGear ? (
        <GearSelector
          gearName={currentGear}
          onColorChange={handleColorChange}
        />
      ) : (
        <div>
          <h2>Customization Complete!</h2>
          <Bike frameType={frameType} frameColor={frameColor} gearColors={gearColors} />
        </div>
      )}
    </div>
  );
}

export default App;
