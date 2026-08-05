"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Fixed deterministic particles array to guarantee 100% hydration-safe SSR rendering
const PARTICLES = [
  { id: 1, size: 3, x: 12, y: 25, duration: 14, delay: 0 },
  { id: 2, size: 4, x: 82, y: 15, duration: 18, delay: 1 },
  { id: 3, size: 2, x: 45, y: 65, duration: 12, delay: 2 },
  { id: 4, size: 5, x: 28, y: 80, duration: 16, delay: 0.5 },
  { id: 5, size: 3, x: 68, y: 40, duration: 15, delay: 1.5 },
  { id: 6, size: 4, x: 90, y: 75, duration: 20, delay: 2.5 },
  { id: 7, size: 2, x: 15, y: 50, duration: 13, delay: 0.8 },
  { id: 8, size: 3, x: 55, y: 20, duration: 17, delay: 1.2 },
  { id: 9, size: 4, x: 38, y: 35, duration: 11, delay: 2.1 },
  { id: 10, size: 2, x: 75, y: 85, duration: 19, delay: 0.3 },
  { id: 11, size: 3, x: 5, y: 90, duration: 14, delay: 1.8 },
  { id: 12, size: 4, x: 95, y: 30, duration: 16, delay: 2.2 },
];

export default function AmbientMotionBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080A09]">
      {/* Dynamic Glowing Sphere 1 - Top Center Neon Mint Pulsing Orb */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.35, 0.65, 0.35],
          y: [0, -50, 0],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#2CE58D]/25 rounded-full blur-[120px] will-change-transform transform-gpu"
      />

      {/* Dynamic Glowing Sphere 2 - Right Mid Floating Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1.4, 1.1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] bg-[#10543F]/40 rounded-full blur-[130px] will-change-transform transform-gpu"
      />

      {/* Dynamic Glowing Sphere 3 - Left Mid Emerald Aura */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.55, 0.3],
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[60%] left-[-5%] w-[650px] h-[650px] bg-[#1E8C63]/35 rounded-full blur-[140px] will-change-transform transform-gpu"
      />

      {/* Floating Animated Biohacking Particle Dots (Hydration Safe Client Mounted) */}
      {mounted &&
        PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: `${p.x}vw`,
              y: `${p.y}vh`,
              opacity: 0.2,
            }}
            animate={{
              y: [`${p.y}vh`, `${(p.y - 30 + 100) % 100}vh`],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[#2CE58D] shadow-[0_0_10px_#2CE58D]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}

      {/* Moving Ambient Grid Wave Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "64px 64px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1E2923_1px,transparent_1px),linear-gradient(to_bottom,#1E2923_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35"
      />
    </div>
  );
}
