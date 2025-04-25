"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ビデオモーダルが開いているときはスクロールを無効にする
  useEffect(() => {
    if (videoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [videoModalOpen]);

  const openVideoModal = () => {
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  };

  // CTAセクションへスクロールする関数
  const scrollToCta = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-12 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Mascot Animation */}
          <motion.div 
            className="order-1 md:order-1 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <Image
                src="/images/hero.png"
                alt="ポチHero"
                fill
                className="object-contain"
                priority
              />
              
              {/* Animation elements */}
              <motion.div 
                className="absolute top-0 right-0 w-8 h-8 text-yellow-400"
                animate={{ 
                  scale: [3, 4.5, 3],
                  rotate: [0, 15, 0],
                  opacity: [0.3, 0.8, 0.3]
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
                className="absolute top-1/2 left-0 w-6 h-6 text-yellow-400"
                animate={{ 
                  scale: [2, 2.5, 2],
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
            className="order-2 md:order-2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-relaxed">
              <span className="text-primary">AIが考えて動く。</span><br/>
              あなたはボタンを押すだけ。
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-lg mx-auto md:mx-0">
              あとはAIがぜんぶ。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full w-[80%] md:w-auto"
                onClick={openVideoModal}
              >
                <Play className="mr-2 h-4 w-4" />
                30秒でわかるAIデモを見る
              </Button>
              
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base rounded-full w-full sm:w-auto"
                onClick={scrollToCta}
              >
                詳しく見る
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div 
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-10 transition-colors"
                onClick={closeVideoModal}
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="AIデモビデオ" 
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}