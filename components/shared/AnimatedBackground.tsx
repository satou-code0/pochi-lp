"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  // To avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-50">
      <motion.div 
        className="absolute -inset-[100px] opacity-70"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(255, 166, 0, 0.6), transparent 25%),
            radial-gradient(ellipse at 75% 35%, rgba(255, 122, 89, 0.5), transparent 35%),
            radial-gradient(circle at 30% 65%, rgba(255, 205, 112, 0.4), transparent 40%),
            radial-gradient(ellipse at 85% 75%, rgba(255, 143, 61, 0.5), transparent 30%),
            radial-gradient(circle at 55% 15%, rgba(255, 183, 77, 0.3), transparent 20%),
            radial-gradient(ellipse at 20% 90%, rgba(253, 108, 29, 0.4), transparent 35%)
          `,
        }}
        animate={{
          scale: [1, 1.05, 1.02, 1],
          x: [0, 15, -5, 10, 0],
          y: [0, -5, 15, -10, 0],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      
      <motion.div
        className="absolute -inset-[100px] opacity-40"
        style={{
          background: `
            radial-gradient(circle at 60% 50%, rgba(255, 204, 145, 0.3), transparent 30%),
            radial-gradient(ellipse at 40% 10%, rgba(255, 173, 96, 0.3), transparent 25%)
          `,
        }}
        animate={{
          scale: [1.05, 1, 1.08, 1.05],
          x: [10, -5, 15, 10],
          y: [5, 15, -10, 5],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[90px]" />
    </div>
  );
}