import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useMemo } from "react";
import CanvasLoader from "../Loader";

// Memoizing at component level for less frequent updates
const Ball: React.FC<{ imgUrl: string }> = React.memo(({ imgUrl }) => {
  // Lazy loading with memoization for texture
  const [decal] = useTexture(useMemo(() => [imgUrl], [imgUrl]));

  // Memoizing geometry args and material properties
  const dodecahedronArgs:
    | [radius?: number | undefined, detail?: number | undefined]
    | undefined = useMemo(() => [1, 1], []);
  const materialProps = useMemo(
    () => ({
      color: "#D1EEEB",
      polygonOffset: true,
      polygonOffsetFactor: -3,
      flatShading: true,
    }),
    []
  );

  return (
    <Float rotationIntensity={1} floatIntensity={1} speed={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={dodecahedronArgs} />
        <meshStandardMaterial {...materialProps} />
        {decal && (
          <Decal
            map={decal}
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
          />
        )}
      </mesh>
    </Float>
  );
});

const BallCanvas: React.FC<{ icon: string }> = React.memo(({ icon }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }} shadows>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
});

export default BallCanvas;
