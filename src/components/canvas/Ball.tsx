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

const Ball: React.FC<{ imgUrl: string }> = React.memo(({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]); // Ensure useTexture is correctly used with an array even for a single texture

  // useMemo to memoize the geometry args and material properties
  const dodecahedronArgs:
    | [radius?: number | undefined, detail?: number | undefined]
    | undefined = useMemo(() => [1, 0], []); // Corrected args to [radius, detail]
  const materialProps = useMemo(
    () => ({
      color: "#5D6B88",
      polygonOffset: true,
      polygonOffsetFactor: -5,
      flatShading: true,
    }),
    []
  );

  return (
    <Float rotationIntensity={1} floatIntensity={2} speed={1.75}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Correctly passed dodecahedron args */}
        <dodecahedronGeometry args={dodecahedronArgs} />
        <meshStandardMaterial {...materialProps} />
        {/* Ensure decal uses the loaded texture */}
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

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }} shadows>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default React.memo(BallCanvas); // Memoizing at export is a good practice if props are unlikely to change frequently
