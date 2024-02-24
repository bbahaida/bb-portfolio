import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
type sType = "xs" | "sm" | "md" | "lg" | "xl";
const Computers = () => {
  const getScreen = (w: number): sType => {
    if (w < 576) return "xs";
    else if (w < 768) return "sm";
    else if (w < 992) return "md";
    else if (w < 1200) return "lg";
    return "xl";
  };
  const [screen, setScreen] = useState(getScreen(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setScreen(getScreen(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const canvasPositionSm = [-1, -0.25, -1.5];
  const canvasPositionlg = [0, -2.25, -1.5];
  const scaleXS = 0.3;
  const scaleLg = 0.7;

  const isLarge = (screen: sType): boolean => {
    return screen === "lg" || screen === "xl";
  };
  const isMobile = (screen: sType): boolean => {
    return screen === "xs";
  };

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.32}
        penumbra={2}
        intensity={1}
        castShadow
        color="purple"
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile(screen) ? scaleXS : scaleLg}
        position={isMobile(screen) ? canvasPositionSm : canvasPositionlg}
        rotation={[-0.01, -0.4, -0.3]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Computers />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
