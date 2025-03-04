// Planet.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Planet({ size, speed, orbitDistance, modelPath }) {
  const groupRef = useRef();

  // Ensure modelPath is defined before attempting to load the model.
  if (!modelPath) {
    console.error("Model path is undefined for a planet. Check your configuration.");
    return null;
  }
  
  // Load the planet model from the provided path.
  const gltf = useGLTF(modelPath);

  // Animate the orbit by rotating the group.
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed * delta;
    }
  });

  return (
    // Outer group handles the orbit rotation.
    <group ref={groupRef}>
      {/* Inner group positions the planet at its orbit distance and scales it */}
      <group position={[orbitDistance, 0, 0]} scale={[size, size, size]}>
        <primitive object={gltf.scene} />
      </group>
    </group>
  );
}

// Preload planet models to improve load times.
useGLTF.preload('/planet1.glb');
useGLTF.preload('/planet2.glb');
useGLTF.preload('/planet3.glb');

export default Planet;
