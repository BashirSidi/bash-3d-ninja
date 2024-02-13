/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader"; 
import { Box } from '@mui/material';

function MeshComponent() {
  const fileUrl = "/dae/dragon.dae"; 
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  const loader = new ColladaLoader();
  loader.load(fileUrl, (collada) => {
    mesh.current.add(collada.scene);
  });

  return (
    <group ref={mesh} />
  );
}

export function DAEViewer() { 
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

export default DAEViewer; 
