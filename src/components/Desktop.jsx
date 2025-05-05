



import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader"; // 👈 import your loader

const DesktopModel = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
       <ambientLight intensity={1.3} />
      <hemisphereLight intensity={2} skyColor="#ffffff"
    groundColor="#000000" />
      <spotLight
        position={[-20, 40, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
       
        scale={isMobile ? 0.97 : 1.42}
        position={isMobile ? [0, -1.6, -2.2] : [-1, -1.9, -3.5]}
        rotation={[-0.0001, -Math.PI/3, -0.15]}
      />
    </mesh>
  );
};

const Desktop = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[19, 2]}
      camera={{ position: [2, 30, 5], fov: 22 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "60vw", height: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <DesktopModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Desktop;












