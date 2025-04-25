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
    <div className="fixed inset-0 z-0 overflow-hidden opacity-30">
      <motion.div 
        className="absolute -inset-[100px] opacity-50"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(255, 122, 0, 0.4), transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(66, 69, 255, 0.4), transparent 40%),
            radial-gradient(circle at 40% 80%, rgba(255, 122, 0, 0.2), transparent 30%),
            radial-gradient(circle at 80% 10%, rgba(66, 69, 255, 0.2), transparent 30%)
          `,
        }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[100px]" />
    </div>
  );
}