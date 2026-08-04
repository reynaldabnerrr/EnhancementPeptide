"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function VialAndBoxMesh() {
  const groupRef = useRef<THREE.Group>(null);

  // Load exact cropped textures from image.png
  const [labelTex, boxTex] = useLoader(THREE.TextureLoader, [
    "/assets/retatrutide_exact_label.png",
    "/assets/box_cropped.png",
  ]);

  labelTex.wrapS = THREE.ClampToEdgeWrapping;
  labelTex.wrapT = THREE.ClampToEdgeWrapping;

  // Gentle smooth auto-rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.35, 0]}>
      {/* ---------------- 1. BOTTLE VIAL ---------------- */}
      <group position={[-0.85, 0, 0.1]}>
        {/* Glass Outer Cylinder Body (Dark Emerald Glass) */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.1, 1.1, 2.9, 64]} />
          <meshPhysicalMaterial
            color="#022019"
            transmission={0.88}
            opacity={0.98}
            transparent
            roughness={0.06}
            ior={1.52}
            thickness={0.6}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
            reflectivity={0.95}
          />
        </mesh>

        {/* Lyophilized Powder Cake inside bottom */}
        <mesh position={[0, -0.95, 0]}>
          <cylinderGeometry args={[0.98, 0.98, 0.75, 48]} />
          <meshStandardMaterial color="#F9FAFB" roughness={0.8} metalness={0.05} />
        </mesh>

        {/* Exact Label Wrap (High-Res Photorealistic Texture from image.png) */}
        <mesh position={[0, 0.05, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[1.11, 1.11, 1.9, 64, 1, true]} />
          <meshStandardMaterial
            map={labelTex}
            metalness={0.4}
            roughness={0.35}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Bottle Shoulder */}
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.58, 1.1, 0.35, 64]} />
          <meshPhysicalMaterial
            color="#022019"
            transmission={0.85}
            roughness={0.1}
            transparent
            clearcoat={1}
          />
        </mesh>

        {/* Bottle Neck */}
        <mesh position={[0, 1.9, 0]}>
          <cylinderGeometry args={[0.58, 0.58, 0.25, 64]} />
          <meshPhysicalMaterial
            color="#022019"
            transmission={0.8}
            roughness={0.1}
            transparent
          />
        </mesh>

        {/* Silver Metallic Aluminum Crimp Collar Seal */}
        <mesh position={[0, 2.1, 0]}>
          <cylinderGeometry args={[0.66, 0.66, 0.3, 64]} />
          <meshStandardMaterial
            color="#E5E7EB"
            metalness={0.98}
            roughness={0.12}
          />
        </mesh>

        {/* Rubber Stopper */}
        <mesh position={[0, 2.22, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.08, 48]} />
          <meshStandardMaterial color="#1F2937" roughness={0.9} />
        </mesh>

        {/* Emerald Green Flip Cap */}
        <mesh position={[0, 2.34, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.2, 64]} />
          <meshStandardMaterial
            color="#084C3A"
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* ---------------- 2. BOX PACKAGING ---------------- */}
      <group position={[0.9, 0.25, -0.2]} rotation={[0, -Math.PI / 14, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.7, 3.5, 1.1]} />
          <meshStandardMaterial map={boxTex} roughness={0.35} metalness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

// Fallback preview while loading textures
function FallbackVial() {
  return (
    <group position={[0, -0.35, 0]}>
      <mesh position={[-0.85, 0, 0.1]}>
        <cylinderGeometry args={[1.1, 1.1, 2.9, 32]} />
        <meshStandardMaterial color="#022019" roughness={0.2} metalness={0.5} />
      </mesh>
      <mesh position={[0.9, 0.25, -0.2]}>
        <boxGeometry args={[1.7, 3.5, 1.1]} />
        <meshStandardMaterial color="#0A0F0D" />
      </mesh>
    </group>
  );
}

export default function ThreeDPeptideVialCanvas() {
  return (
    <div className="relative w-full h-[480px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0.6, 8.2], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[6, 12, 6]} intensity={3.0} color="#FFFFFF" />
        <directionalLight position={[-6, -3, -6]} intensity={1.5} color="#2CE58D" />
        <pointLight position={[0, 4, 4]} intensity={3.5} color="#2CE58D" />
        <spotLight position={[3, 8, 5]} angle={0.4} penumbra={1} intensity={2.5} color="#FFFFFF" />

        <Suspense fallback={<FallbackVial />}>
          <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.4}>
            <VialAndBoxMesh />
          </Float>
        </Suspense>

        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.7}
          scale={10}
          blur={2.5}
          far={4}
          color="#2CE58D"
        />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={12}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.7}
          autoRotate
          autoRotateSpeed={1.2}
          dampingFactor={0.05}
        />
      </Canvas>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0B0B0B]/90 border border-[#2CE58D]/40 backdrop-blur-md text-[11px] font-mono text-[#2CE58D] shadow-[0_0_25px_rgba(44,229,141,0.3)] pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#2CE58D] animate-ping" />
        3D STUDIO SCENE • BOTOL & BOX RETATRUTIDE 360°
      </div>
    </div>
  );
}
