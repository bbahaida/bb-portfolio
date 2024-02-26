import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import Loader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf");

  // Use useMemo to avoid re-creating the primitive on every render
  const earthComponent = useMemo(
    () => (
      <primitive
        object={scene}
        scale={2.5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    ),
    [scene]
  );

  return earthComponent;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand" // Keep frameloop on demand to reduce rendering when not interacting
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} /> {/* Optimized lighting */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
