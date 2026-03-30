import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Preload the GLB model
// useGLTF.preload('/Shahnawaz.glb');
useGLTF.preload('/desk.glb');

function Desk() {
  const modelRef = useRef();
  // const { scene, error } = useGLTF('/Shahnawaz.glb');
  const { scene, error } = useGLTF('/desk.glb');
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Add subtle rotation animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  useEffect(() => {
    if (scene) {
      // Keep original materials and colors
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  if (error) {
    return (
      <mesh ref={modelRef}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    );
  }

  if (!scene) {
    return <LoadingFallback />;
  }

  // Responsive scaling - larger on mobile to fill the full width
  const scale = isMobile ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5];
  const position = isMobile ? [0, 0, 0] : [1, 0, 0];

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={scale}
      position={position}
      rotation={[0, 0, 0]}
    />
  );
}

function LoadingFallback() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial color="#10b981" />
    </mesh>
  );
}

// export default function DeskModel() {
//   return (
//     <div style={{ 
//       position: 'fixed',
//       width: '100%', 
//       height: '100%', 
//       minHeight: '400px',
//       position: 'relative',
//       background: 'transparent'
//     }}>
//       <Canvas
//         camera={{ position: [1, 0, 5], fov: 45 }}
//         style={{ 
//           width: '100%',
//           height: '100%'
//         }}
//         gl={{ 
//           alpha: true, 
//           antialias: true,
//           preserveDrawingBuffer: true
//         }}
//       >
//         {/* Clean lighting setup */}
//         <ambientLight intensity={0.6} />
//         <directionalLight 
//           position={[5, 5, 5]} 
//           intensity={1.2}
//           castShadow
//         />
//         <pointLight position={[-3, 3, 3]} intensity={0.5} color="#8b5cf6" />
//         <pointLight position={[3, -3, 3]} intensity={0.5} color="#10b981" />

//         {/* Shuaib Desk Model */}
//         <Suspense fallback={<LoadingFallback />}>
//           <Desk />
//         </Suspense>

//         {/* Controls */}
//         <OrbitControls 
//           enableZoom={true}
//           enablePan={false}
//           enableRotate={true}
//           autoRotate={true}
//           autoRotateSpeed={0.5}
//           enableDamping={true}
//           dampingFactor={0.05}
//           minDistance={3}
//           maxDistance={10}
//         />
//       </Canvas>
//     </div>
//   );
//}

// export default function DeskModel() {
//   return (
//     <div style={{
//       position: "fixed",
//       top: "120px",
//       right: "40px",
//       width: "260px",
//       padding: "20px",
//       border: "1px solid rgba(255,255,255,0.2)",
//       borderRadius: "15px",
//       background: "transparent",
//       textAlign: "center",
//       zIndex: 999
//     }}>
//       <h3 style={{ color: "#00bcd4", marginBottom: "10px" }}>
//         📊 Data Analyst
//       </h3>
//       <p style={{ color: "#aaa", fontSize: "14px" }}>
//         Skilled in Python, SQL, Power BI & Data Visualization
//       </p>
//     </div>
//   );
// }

export default function DeskModel() {
  return (
    <div style={{
      position: "fixed",
      top: "120px",
      right: "40px",
      width: "500px",
      height: "180px",          // 🔥 bigger width
      padding: "25px",         // 🔥 more spacing inside
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "16px",
      background: "transparent",
      textAlign: "center",
      zIndex: 999
    }}>
      <h2 style={{ 
        color: "#00bcd4", 
        marginBottom: "12px",
        fontSize: "24px"       // 🔥 bigger heading
      }}>
        📊 Data Analyst
      </h2>

      <p style={{ 
        color: "#aaa", 
        fontSize: "14px",
        lineHeight: "1.6"
      }}>
        Skilled in Python, SQL, Excel, Power BI & Data Visualization
      </p>

      {/* <p style={{ 
        marginTop: "10px",
        color: "#00b894",
        fontWeight: "bold"
      }}>
        100+ Problems Solved
      </p> */}
    </div>
  );
}