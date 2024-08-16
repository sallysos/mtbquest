import React from 'react';
import './ProgressBar.css';

function ProgressBar({ currentStep }) {
  const steps = ['Frame', 'Color & Theme', 'Components', 'Summary'];

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div key={index} className="progress-step">
          <div
            className={`progress-circle ${currentStep === index ? 'active' : ''}`}
          >
            {index + 1}
          </div>
          <span className="progress-label">{step}</span>
          {index < steps.length - 1 && <div className="progress-line"></div>}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
