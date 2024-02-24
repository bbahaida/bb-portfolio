import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Custom hook for determining screen size
const useScreenSize = () => {
  const [screen, setScreen] = useState(() => {
    const width = window.innerWidth;
    return width < 576
      ? "xs"
      : width < 768
      ? "sm"
      : width < 992
      ? "md"
      : width < 1200
      ? "lg"
      : "xl";
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreen(
        width < 576
          ? "xs"
          : width < 768
          ? "sm"
          : width < 992
          ? "md"
          : width < 1200
          ? "lg"
          : "xl"
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
};

// Component for rendering and animating the model
const Model = ({ screen }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  // Animation loop for continuous rotation
  useFrame(() => {
    scene.rotation.y += 0.01; // Adjust rotation speed as needed
  });

  // Adjust scale and position based on screen size
  const scale = screen === "xs" ? 0.3 : 0.8;
  const position = screen === "xs" ? [-1, -0.25, -1.5] : [2, -1.5, -5];

  return (
    <>
      <primitive
        object={scene}
        rotation={[0, 0, -0.2]}
        scale={scale}
        position={position}
      />
    </>
  );
};

// Canvas component wrapping the Model and configuring the scene
const ComputersCanvas = () => {
  const screen = useScreenSize();

  return (
    <Canvas shadows camera={{ position: [20, 3, 5], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model screen={screen} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
