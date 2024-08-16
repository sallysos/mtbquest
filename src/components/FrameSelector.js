import React from 'react';
import './FrameSelector.css';


function FrameSelector({ onSelectFrame }) {
  const frameGroups = [
      {
        title: 'Hard Tail',
        description: 'Hardtail bikes, with no rear suspension, are lightweight and efficient, making them perfect for smooth trails and climbing. They require lower maintenance and offer responsive handling, ideal for cross-country and trail riding.',
        frames: ['Cross Country (XC)', 'Hardcore Hardtail (HD)', 'Dirt Jump (DJ)']
      },
      {
        title: 'Soft Tail',
        description: 'Softtail bikes, equipped with rear suspension, provide enhanced comfort on rough and technical trails. They offer improved traction and versatile performance across various terrains, from rugged mountain paths to downhill trails.',
        frames: ['Cross Country (XC)', 'Trail (TR)', 'Enduro (EN)', 'Downhill (DH)']
      }
  ];

  return (
    <div className="frame-selector">
      <section className="frame-intro">
        <p>
          <strong>Welcome to our MTB customization simulator! </strong>
          <br />
          Start building your dream bike by selecting your preferred frame type and configuration. 
        </p>
      </section>

      <h2>Select Frame Type</h2>
      <div className="frame-groups-container">
          {frameGroups.map((group) => (
            <div key={group.title} className="frame-group">
                <h3>{group.title}</h3>
                <p className="frame-description">{group.description}</p>
                <div className="frame-buttons-container">
                    {group.frames.map((frame) => (
                        <button key={frame} onClick={() => onSelectFrame(frame)}>
                            {frame}
                        </button>
                    ))}
                </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FrameSelector;
