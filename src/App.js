import React, { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import FrameSelector from './components/FrameSelector';
import FrameCustomizer from './components/FrameCustomizer';
import WheelsSelector from './components/WheelsSelector';
import WheelsCustomizer from './components/WheelsCustomizer';
import Bike from './components/Bike';

function App() {
  const [frameType, setFrameType] = useState(null);
  const [selectedFrameProduct, setSelectedFrameProduct] = useState(null);
  const [wheelsType, setWheelsType] = useState(null);
  const [wheelsColor, setWheelsColor] = useState('gray');
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleReturnToFrameSelect = () => {
    setCurrentStep(0);
  };

  const handleReturnToFrameCustomize = () => {
    setCurrentStep(1);
  };

  const handleReturnToWheelsSelect = () => {
    setCurrentStep(2);
  };

  return (
    <div className="App">
      <header>
        <img src="/images/MTB-logo.png" alt="MTB Logo" className="mtb-logo" />
        <h1 className="mtb-title">Bike Customization Simulator</h1>
      </header>

      <ProgressBar currentStep={currentStep} />

      {currentStep === 0 && (
        <FrameSelector
          onSelectFrame={(type) => {
            setFrameType(type);
            handleNext();
          }}
        />
      )}

      {currentStep > 0 && (
        <div className="customization-layout">
          <div className="customization-controls">
            {currentStep === 1 && (
              <FrameCustomizer
                frameType={frameType}
                onSelectFrameProduct={(product) => setSelectedFrameProduct(product)}
                onNext={handleNext}
                onReturn={handleReturnToFrameSelect}
              />
            )}

            {currentStep === 2 && (
              <WheelsSelector
                onSelectWheels={(type) => {
                  setWheelsType(type);
                  handleNext();
                }}
              />
            )}

            {currentStep === 3 && (
              <WheelsCustomizer
                frameType={frameType}
                selectedFrameProduct={selectedFrameProduct}
                wheelsType={wheelsType}
                wheelsColor={wheelsColor}
                onColorChange={(color) => setWheelsColor(color)}
                onNext={handleNext}
                onReturn={handleReturnToWheelsSelect}
              />
            )}

            {currentStep === 4 && (
              <div>
                <h2>Customization Complete!</h2>
              </div>
            )}
          </div>

          <div className="bike-simulator">
            <Bike
              frameType={frameType}
              selectedFrameProduct={selectedFrameProduct}
              wheelsType={wheelsType}
              wheelsColor={wheelsColor}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
