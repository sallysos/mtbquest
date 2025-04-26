import React, { useState } from 'react';
import NextButton from './NextButton';
import ReturnButton from './ReturnButton';
import './FrameCustomizer.css';

function FrameCustomizer({ frameType, onSelectFrameProduct, onNext, onReturn }) {
  const frameProducts = [
    { name: 'Hard-XC ritchey-p29er', image: '/images/frames/ritchey-p29er.png' },
    { name: 'Hard-XC ritchey-ultra-frame', image: '/images/frames/ritchey-ultra-frame.png' },
    { name: 'Hard-XC usma-slr-frameset', image: '/images/frames/usma-slr-frameset.png' },
    // etc. -- depends on selected frameType
  ];

  const [selectedProduct, setSelectedProduct] = useState(frameProducts[0]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    onSelectFrameProduct(product); // Send selected product back to App.js
  };

  return (
    <div className="frame-customizer">
      <div className="main-display">
        <img src={selectedProduct.image} alt={selectedProduct.name} className="main-frame" />
      </div>

      <div className="frame-scroll-panel">
        {frameProducts.map((product) => (
          <div
            key={product.name}
            className="frame-thumbnail-container"
            onClick={() => handleSelectProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`frame-thumbnail ${selectedProduct.name === product.name ? 'selected' : ''}`}
            />
            <span className="frame-name">{product.name}</span>
          </div>
        ))}
      </div>

      <div className="button-group">
        <ReturnButton onClick={onReturn} />
        <NextButton onClick={onNext} />
      </div>
    </div>
  );
}

export default FrameCustomizer;