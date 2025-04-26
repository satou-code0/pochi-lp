"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'メリット', href: '#benefits' },
  { name: '開発事例', href: '#usecases' },
  { name: '導入事例', href: '#casestudies' },
  { name: '料金プラン', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setScrollY(window.scrollY);
    };

    // モバイルメニューが開いているときはスクロールを無効に
    if (mobileMenuOpen) {
      // スクロール位置を記憶
      setScrollY(window.scrollY);
      // スクロール固定と背景のスクロール位置設定
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // スクロール解除と元の位置に戻す
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // クリーンアップ時にもスクロールを元に戻す
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen, scrollY]);

  // モバイルメニューのアニメーション設定
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.1 } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.3,
        when: "afterChildren",
        delay: 0.1
      } 
    }
  };

  const menuVariants = {
    hidden: { 
      scale: 0.95,
      y: -20,
      opacity: 0
    },
    visible: { 
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        damping: 20, 
        stiffness: 300
      }
    },
    exit: { 
      scale: 0.95,
      y: -20,
      opacity: 0,
      transition: { 
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    exit: (i: number) => ({ 
      y: 10, 
      opacity: 0,
      transition: { 
        duration: 0.2,
        delay: 0.05 * i
      }
    })
  };

  const ctaButtonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        delay: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      y: 10,
      scale: 0.9,
      transition: { 
        duration: 0.2 
      }
    },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { 
      scale: 0.98,
      transition: { 
        type: "spring", 
        stiffness: 500
      }
    }
  };

  // 装飾要素のアニメーション
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 0.8,
      transition: { 
        delay: 0.2, 
        duration: 0.8,
        ease: "easeOut" 
      }
    },
    exit: { 
      scale: 0, 
      opacity: 0,
      transition: { 
        duration: 0.3
      }
    }
  };

  const toggleButtonVariants = {
    open: { rotate: 180, scale: 1 },
    closed: { rotate: 0, scale: 1 }
  };

  return (
    <header className={`w-full z-50 transition-all duration-300 `}>
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-32 w-32">
            <Image
              src="/images/logo.png"
              alt="オシゴトポチッと"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#cta"
            className="bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2 text-sm font-medium inline-flex items-center justify-center"
          >
            無料デモを申し込む
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="md:hidden text-foreground z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={toggleButtonVariants}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {mobileMenuOpen ? (
            <X className="h-10 w-10 text-white" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay backdrop with gradient */}
            <motion.div 
              className="fixed inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 z-40 md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* 装飾用の円形エレメント */}
              <motion.div 
                className="absolute top-1/4 right-1/3 w-40 h-40 rounded-full bg-white/10 blur-xl"
                variants={circleVariants}
              />
              <motion.div 
                className="absolute bottom-1/3 left-1/4 w-60 h-60 rounded-full bg-secondary/30 blur-xl"
                variants={circleVariants}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
            
            {/* Mobile Menu Content */}
            <motion.div 
              className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
              onClick={(e) => e.target === e.currentTarget && setMobileMenuOpen(false)}
            >
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-sm w-11/12 p-8 mx-auto relative overflow-hidden"
                variants={menuVariants}
              >
                {/* 装飾要素 - 左上の円 */}
                <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-primary/10 -translate-x-1/2 -translate-y-1/2" />
                {/* 装飾要素 - 右下の円 */}
                <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-secondary/10 translate-x-1/3 translate-y-1/3" />
                
                <div className="flex flex-col space-y-4 relative">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      custom={i}
                      variants={itemVariants}
                    >
                      <Link 
                        href={link.href}
                        className="flex items-center space-x-3 text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5 border-b border-gray-100 last:border-0"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-primary font-bold">{i + 1}.</span>
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    variants={ctaButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="mt-6 pt-4"
                  >
                    <Link 
                      href="#cta"
                      className="bg-primary hover:bg-primary/90 text-white text-center rounded-xl py-4 px-6 text-lg font-medium block shadow-lg shadow-primary/25 relative overflow-hidden"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="relative z-10">無料デモを申し込む</span>
                      <span className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/80 z-0" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}