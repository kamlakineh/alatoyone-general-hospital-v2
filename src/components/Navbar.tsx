"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HeartPulse, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ChevronDown 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/Hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Job', href: '/job' },
    { name: 'Blog', href: '/news' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isHome = pathname === '/';

  return (
    <header className={cn(
      "fixed left-0 right-0 z-50 transition-all duration-300",
      isVisible ? "top-0" : "-top-32"
    )}>
      {/* Top Bar */}
      <div className={cn(
        "bg-blue-900 text-white py-2 text-xs transition-all duration-300",
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-blue-400" />
              <span>Support: 24/7 Emergency Call</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-blue-400" />
              <span>Email Us: Alatyon@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-blue-400 transition-colors">
                <Icon className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className={cn(
        "transition-all duration-300",
        isScrolled || !isHome ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-5"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <HeartPulse className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-blue-900 tracking-tighter">Alatyon</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-bold transition-colors flex items-center gap-1",
                      pathname === link.href ? "text-blue-600" : "text-blue-900 hover:text-blue-600"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </Link>
                </div>
              ))}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
                Call 8086
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-blue-900"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold">
                    Call 8086
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
