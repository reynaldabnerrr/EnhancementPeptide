"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();

  const initialPosition = (() => {
    if (reducedMotion) return { opacity: 1 };

    switch (direction) {
      case "up":
        return { opacity: 0, y: 36 };
      case "down":
        return { opacity: 0, y: -36 };
      case "left":
        return { opacity: 0, x: 42 };
      case "right":
        return { opacity: 0, x: -42 };
      case "none":
        return { opacity: 0, scale: 0.985 };
    }
  })();

  return (
    <motion.div
      initial={initialPosition}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -8% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
