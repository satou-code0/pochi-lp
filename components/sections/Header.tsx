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
        <button 
          className="md:hidden text-foreground z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {mobileMenuOpen ? (
            <X className="h-12 w-12" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Content */}
            <motion.div 
              className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.target === e.currentTarget && setMobileMenuOpen(false)}
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl max-w-sm w-11/12 p-6 mx-auto my-auto"
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              >
                <div className="flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-center py-2 border-b border-gray-100 last:border-0"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link 
                    href="#cta"
                    className="bg-primary hover:bg-primary/90 text-white text-center rounded-md py-6 mt-4 text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    無料デモを申し込む
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}