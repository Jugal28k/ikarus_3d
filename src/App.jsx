// App.jsx
import React, { useState } from 'react';
import SolarSystem from './SolarSystem';
import ControlPanel from './ControlPanel';

function App() {
  // Define the default configurations for your planets.
  const [config, setConfig] = useState([
    { size: 0.5, speed: 0.5, orbitDistance: 5, modelPath: '/planet1.glb' },
    { size: 0.7, speed: 0.3, orbitDistance: 7, modelPath: '/planet2.glb' },
    { size: 0.4, speed: 0.8, orbitDistance: 9, modelPath: '/planet3.glb' },
  ]);

  return (
    <div className="relative w-screen h-screen">
      {/* 3D Solar System Scene */}
      <SolarSystem config={config} />
      {/* UI Control Panel */}
      <ControlPanel config={config} setConfig={setConfig} />
    </div>
  );
}

export default App;
