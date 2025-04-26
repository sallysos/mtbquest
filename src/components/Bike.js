import React from 'react';

function Bike({ frameType, selectedFrameProduct, wheelsType, wheelsColor }) {
  if (!selectedFrameProduct) {
    return (
      <div style={{ 
        width: '300px', 
        height: '300px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        border: '1px dashed #ccc', 
        marginBottom: '1rem' 
      }}>
        <p style={{ padding: '1rem', textAlign: 'center' }}>
          Please select a frame to start customizing your bike.
        </p>
      </div>
    );
    }


  return (
    <div>
      <h3>Bike Preview</h3>
      <img
        src={selectedFrameProduct.image}
        alt={selectedFrameProduct.name}
        style={{ maxWidth: '300px', marginBottom: '1rem' }}
      />
      {wheelsType && (
        <p>
          Wheels: {wheelsType} ({wheelsColor})
        </p>
      )}
    </div>
  );
}

export default Bike;
