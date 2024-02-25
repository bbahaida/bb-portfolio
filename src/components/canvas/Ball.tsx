import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
//import { useScreenSize } from "../../hooks/useScreenSize";
import CanvasLoader from "../Loader";
const Ball: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float rotationIntensity={1} floatIntensity={2} speed={1.75}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#5D6B88"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};
const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  //const screen = useScreenSize();

  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
