// SolarSystem.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import Planet from './Planet';

function SolarSystem({ config }) {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Placeholder Sun using a sphere */}
      <Center>
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial color="yellow" />
        </mesh>
      </Center>

      {config.map((planet, index) => (
        <Planet 
          key={index}
          size={planet.size}
          speed={planet.speed}
          orbitDistance={planet.orbitDistance}
          modelPath={planet.modelPath}
        />
      ))}
    </Canvas>
  );
}

export default SolarSystem;
