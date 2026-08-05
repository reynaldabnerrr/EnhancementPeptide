"use client";

import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  parallax?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  parallax = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.25,
  });
  const parallaxY = useTransform(smoothProgress, [0, 1], [28, -28]);

  const initialPosition = (() => {
    if (reducedMotion) return { opacity: 1 };

    switch (direction) {
      case "up":
        return { opacity: 0, y: 60, filter: "blur(10px)", scale: 0.985 };
      case "down":
        return { opacity: 0, y: -60, filter: "blur(10px)", scale: 0.985 };
      case "left":
        return { opacity: 0, x: 70, filter: "blur(10px)", scale: 0.985 };
      case "right":
        return { opacity: 0, x: -70, filter: "blur(10px)", scale: 0.985 };
      case "none":
        return { opacity: 0, filter: "blur(8px)", scale: 0.97 };
    }
  })();

  return (
    <motion.div
      ref={ref}
      initial={initialPosition}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -8% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      <motion.div style={{ y: reducedMotion || !parallax ? 0 : parallaxY }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
