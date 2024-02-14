import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Box } from '@mui/material';

function ImageComponent() {
  const texture = new TextureLoader().load('jpgTestImga.jpeg');
  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

const JpgThreeJSViewer = () => {
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
        <ImageComponent />
      </Canvas>
    </Box>
  );
}

export default JpgThreeJSViewer;