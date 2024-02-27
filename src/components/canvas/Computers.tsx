import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactElement, Suspense, memo, useMemo } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import CanvasLoader from "../Loader";

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ModelProps {
  screen: ScreenSize;
}

// Optimized Model Component with type-safe props and useMemo
const Model = memo(({ screen }: ModelProps): ReactElement => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  // Use useMemo to avoid re-calculating scale and position on every render
  const scale = useMemo(() => (screen === "xs" ? 0.3 : 0.8), [screen]);
  const position = useMemo(
    () => (screen === "xs" ? [-1, -0.25, -1.5] : [2, -1.5, -5]),
    [screen]
  );

  return (
    <primitive
      object={scene}
      rotation={[0, 0, -0.2]}
      scale={scale}
      position={position}
    />
  );
});

// Canvas Component with conditional rendering and lazy loading
const ComputersCanvas = (): ReactElement => {
  const { screen } = useScreenSize();

  return (
    <Canvas
      gl={{ antialias: false, powerPreference: "high-performance" }}
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Conditionally render Model only if screen has changed */}
        {useMemo(
          () => (
            <Model screen={screen} key={screen} />
          ),
          [screen]
        )}
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
