"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Machine() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.08 - 0.18;
  });

  return (
    <group ref={group} position={[0.8, -0.45, 0]}>
      <RoundedBox args={[3.2, 3.1, 2.1]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color="#101112" metalness={0.9} roughness={0.32} />
      </RoundedBox>

      <mesh position={[0, -0.15, 1.08]}>
        <boxGeometry args={[1.85, 1.15, 0.12]} />
        <meshStandardMaterial color="#060606" metalness={0.8} roughness={0.3} />
      </mesh>

      <pointLight position={[0, -0.15, 1.45]} intensity={45} distance={5} color="#ff6a00" />
      <mesh position={[0, -0.15, 1.17]}>
        <boxGeometry args={[1.45, 0.72, 0.06]} />
        <meshStandardMaterial color="#ff5a00" emissive="#ff4d00" emissiveIntensity={7} />
      </mesh>

      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 2.6, 24]} />
        <meshStandardMaterial color="#171819" metalness={0.9} roughness={0.25} />
      </mesh>

      <mesh position={[1.0, 1.7, 0.25]}>
        <cylinderGeometry args={[0.22, 0.22, 2.8, 24]} />
        <meshStandardMaterial color="#121314" metalness={0.95} roughness={0.2} />
      </mesh>

      <mesh position={[0, -2.05, 1.0]}>
        <boxGeometry args={[7.2, 0.16, 1.4]} />
        <meshStandardMaterial color="#171717" metalness={0.8} roughness={0.35} />
      </mesh>

      {[-3,-2.2,-1.4,-0.6,0.2,1,1.8,2.6,3.4].map((x) => (
        <mesh key={x} position={[x, -1.95, 1.02]} rotation={[0,0,Math.PI/2]}>
          <cylinderGeometry args={[0.09, 0.09, 1.35, 16]} />
          <meshStandardMaterial color="#303030" metalness={0.85} roughness={0.25} />
        </mesh>
      ))}

      {[-2.8,-2.1,-1.4,1.8,2.5,3.2].map((x, i) => (
        <Float key={x} speed={1 + i * .08} rotationIntensity={0.03} floatIntensity={0.05}>
          <RoundedBox args={[0.72, 0.72, 0.72]} radius={0.04} position={[x, -1.48, 1.05]}>
            <meshStandardMaterial
              color={i < 3 ? "#252525" : "#151515"}
              metalness={0.6}
              roughness={0.5}
              emissive={i >= 3 ? "#3a1200" : "#000000"}
              emissiveIntensity={i >= 3 ? 1.2 : 0}
            />
          </RoundedBox>
        </Float>
      ))}
    </group>
  );
}

export default function FactoryScene() {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.25, 8.4], fov: 43 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.18} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} />
        <directionalLight position={[-4, 1, 4]} intensity={0.7} />
        <Machine />
        <Environment preset="warehouse" />
      </Canvas>
    </div>
  );
}
