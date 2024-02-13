/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box } from '@mui/material';

function MeshComponent() {
  const fileUrl = "rock_stone.glb";
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  // Load the GLB file
  const loader = new GLTFLoader();
  loader.load(fileUrl, (gltf) => {
    mesh.current.add(gltf.scene);
  });

  return (
    <group ref={mesh} />
  );
}

export function GLBViewer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Canvas
        sx={{
          height: '80vh',
          width: '80vw',
        }}
      >
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </Box>
  );
}

export default GLBViewer;
