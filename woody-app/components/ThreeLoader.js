import React, { useRef, useEffect } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Extend will make OrbitControls available as a JSX element called orbitControls
extend({ OrbitControls });

const ThreeLoader = ({ path }) => {
  const group = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      path,
      (gltf) => {
        group.current.add(gltf.scene);

        camera.position.z = 5;
        
      },
      undefined,
      (error) => {
        console.error('An error happened', error);
      }
    );
  }, [path]);

  // Rotate the model
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <group ref={group} />
      <orbitControls args={[camera, gl.domElement]} />
    </>
  );
};

export default ThreeLoader;