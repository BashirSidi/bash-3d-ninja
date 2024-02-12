/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Box } from '@mui/material';

function MeshComponent() {
  const fileUrl = "/hat-obj/source/cappello/cappello/cappello.obj"; // Update the file path
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  // Load the OBJ file
  const loader = new OBJLoader();
  loader.load(fileUrl, (obj) => {
    mesh.current.add(obj);
  });

  return (
    <group ref={mesh} />
  );
}

export function HatObj() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust as needed
      }}
    >
      <Canvas
        sx={{
          height: '80vh', // Adjust as needed
          width: '80vw', // Adjust as needed
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

export default HatObj;
