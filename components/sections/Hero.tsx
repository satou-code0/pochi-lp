"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="pt-28 pb-20 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Mascot Animation */}
          <motion.div 
            className="order-2 md:order-1 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <Image
                src="/images/pochirobo-hero.png"
                alt="ポチロボ"
                fill
                className="object-contain"
                priority
              />
              
              {/* Animation elements */}
              <motion.div 
                className="absolute top-1/4 right-1/4 w-8 h-8 text-yellow-400"
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, 15, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute top-2/3 left-1/4 w-6 h-6 text-yellow-400"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Text and CTA */}
          <motion.div 
            className="order-1 md:order-2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
              <span className="text-primary">ポチッと</span>押すだけ、<br className="hidden md:block" />
              バックオフィス完了。
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-lg mx-auto md:mx-0">
              毎日の<span className="font-semibold">"面倒"</span>を、ボタンひとつで自動化する業務効率化アプリ
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full w-full sm:w-auto">
                無料デモを申し込む <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base rounded-full w-full sm:w-auto">
                詳しく見る
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}