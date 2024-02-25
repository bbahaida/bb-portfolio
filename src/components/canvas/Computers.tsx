import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";
import { useScreenSize } from "../../hooks/useScreenSize";

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
