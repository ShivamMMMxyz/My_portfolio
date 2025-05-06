





import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const DesktopModel = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={1.3} />
      <hemisphereLight intensity={2} skyColor="#ffffff" groundColor="#000000" />
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
        scale={isMobile ? 0.97 : 1.47}
        position={isMobile ? [0, -1.6, -2.2] : [0, -1.9, -3.5]}
        rotation={[-0.0001, -Math.PI / 3, -0.15]}
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
    <>
      {isMobile ? (
        <img
          src="/assets/desktop.png" // Replace with your actual image path
          alt="Desktop Model Render"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <Canvas
          frameloop="demand"
          shadows
          dpr={[24, 2.2]}
          camera={{ position: [2, 30, 4], fov: 30 }}
          gl={{ preserveDrawingBuffer: true }}
          style={{ width: "100%", height: "100%" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2.1}
              minPolarAngle={Math.PI / 2.1}
            />
            <DesktopModel isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
};

export default Desktop;
