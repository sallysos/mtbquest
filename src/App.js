import React, { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import FrameSelector from './components/FrameSelector';
import Bike from './components/Bike';
import GearSelector from './components/GearSelector';
import ColorPicker from './components/ColorPicker';

function App() {
  const [frameType, setFrameType] = useState(null);
  const [frameColor, setFrameColor] = useState('red');
  const [gearColors, setGearColors] = useState({});
  const [currentGear, setCurrentGear] = useState(null);
  const [currentStep, setCurrentStep] = useState(0); // 0: Frame, 1: Color & Theme, 2: Components, 3: Summary

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
    setCurrentStep(1); // Move to the next step: Color & Theme
  };

  const handleColorChange = (color) => {
    setFrameColor(color);
    setCurrentGear(gearList[0]); // Start with the first gear
    setCurrentStep(2); // Move to the Components step
  };

  const handleGearColorChange = (part, color) => {
    setGearColors((prevColors) => ({
      ...prevColors,
      [part]: color,
    }));
    moveToNextGear(part);
  };

  const moveToNextGear = (currentGear) => {
    const currentIndex = gearList.indexOf(currentGear);
    if (currentIndex < gearList.length - 1) {
      const nextGear = gearList[currentIndex + 1];
      setCurrentGear(nextGear);
    } else {
      setCurrentStep(3); // Move to the Summary step
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="mtq-title">Bike Customization Simulator</h1>
      </header>
      <ProgressBar currentStep={currentStep} />
      
      {currentStep === 0 && (
        <FrameSelector onSelectFrame={handleSelectFrame} />
      )}

      {currentStep === 1 && (
        <div>
          <h2>Select Frame Color</h2>
          <ColorPicker color={frameColor} onColorChange={handleColorChange} />
        </div>
      )}

      {currentStep === 2 && currentGear && (
        <GearSelector
          gearName={currentGear}
          onColorChange={handleGearColorChange}
        />
      )}

      {currentStep === 3 && (
        <div>
          <h2>Customization Complete!</h2>
          <Bike frameType={frameType} frameColor={frameColor} gearColors={gearColors} />
        </div>
      )}
    </div>
  );
}

export default App;
