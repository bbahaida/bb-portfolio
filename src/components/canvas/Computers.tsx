import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactElement, Suspense, memo } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import CanvasLoader from "../Loader";

// Define a type for the screen sizes
type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

// Assuming useScreenSize is properly typed in its definition file
// For example, it should return something like: { screen: ScreenSize }

// Model Props type
interface ModelProps {
  screen: ScreenSize;
}

// Optimized Model Component with type-safe props
const Model = memo(({ screen }: ModelProps): ReactElement => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  // Adjust scale and position based on screen size, optimized for performance
  const scale = screen === "xs" ? 0.3 : 0.8;
  const position: [number, number, number] =
    screen === "xs" ? [-1, -0.25, -1.5] : [2, -1.5, -5];

  return (
    <primitive
      object={scene}
      rotation={[0, 0, -0.2]}
      scale={scale}
      position={position}
    />
  );
});

// Canvas Component
const ComputersCanvas = (): ReactElement => {
  const { screen } = useScreenSize(); // Efficient handling of screen size changes

  return (
    <Canvas shadows camera={{ position: [20, 3, 5], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
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
