"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'メリット', href: '#benefits' },
  { name: 'ユースケース', href: '#usecases' },
  { name: '導入事例', href: '#casestudies' },
  { name: '料金プラン', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-40">
            <Image
              src="/images/logo.svg"
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
          <Button className="bg-primary hover:bg-primary/90 text-white">
            無料デモを申し込む
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white w-full">
              無料デモを申し込む
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}