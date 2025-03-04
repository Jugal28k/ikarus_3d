// ControlPanel.jsx
import React from 'react';

function ControlPanel({ config, setConfig }) {
  // Update the configuration when a slider value changes.
  const handleChange = (index, key, value) => {
    const newConfig = [...config];
    newConfig[index][key] = parseFloat(value);
    setConfig(newConfig);
  };

  return (
    <div className="absolute top-0 left-0 bg-white bg-opacity-90 p-4 shadow-md max-h-screen overflow-auto">
      <h2 className="text-xl font-bold mb-4">Planet Controls</h2>
      {config.map((planet, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <h3 className="font-semibold">Planet {index + 1}</h3>
          <div className="mb-2">
            <label className="block text-sm">Size: {planet.size}</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={planet.size}
              onChange={(e) => handleChange(index, 'size', e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm">Speed: {planet.speed}</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={planet.speed}
              onChange={(e) => handleChange(index, 'speed', e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm">Orbit Distance: {planet.orbitDistance}</label>
            <input
              type="range"
              min="3"
              max="15"
              step="0.5"
              value={planet.orbitDistance}
              onChange={(e) => handleChange(index, 'orbitDistance', e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ControlPanel;
