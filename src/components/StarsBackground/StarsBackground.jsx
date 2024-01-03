import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { positionValue } from "../Hero/heroSlice";

const StarsBackground = () => {
  const ref = useRef();

  const fillArrayInSphere = (array, options) => {
    const { radius } = options;
    const numPoints = array.length / 3;

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      array[i * 3] = x;
      array[i * 3 + 1] = y;
      array[i * 3 + 2] = z;
    }
    console.log(radius);
  };

  const [sphere] = useState(() => {
    const newArray = new Float32Array(5000);
    fillArrayInSphere(newArray, { radius: 10 });
    return newArray;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff" // Ganti dengan warna yang sesuai
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false} // Perbaiki typo di sini
        />
      </Points>
    </group>
  );
};

const StarCanvas = () => {
  const position = useSelector(positionValue);

  return (
    <div className="w-full h-full flex justify-center items-center fixed inset-0 z-10">
      <motion.div
        className="w-full h-full flex justify-center items-center"
        initial={{ scale: "100%" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <Canvas camera={{ positions: [1, 1, 1] }}>
          <Suspense fallback={null}>
            <StarsBackground />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  );
};

export default StarCanvas;
