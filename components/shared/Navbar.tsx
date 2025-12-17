'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiPhone, FiMail } from 'react-icons/fi';
import { ApplicationRoutes } from '@/constants/ApplicationRoutes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: ApplicationRoutes.Home },
    { name: 'About', path: ApplicationRoutes.About },
    { name: 'Contact', path: ApplicationRoutes.Contact },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-xl py-3'
          : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={ApplicationRoutes.Home}>
            <motion.div
              className="relative cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/logo.png"
                alt="Novaro Global Limited Logo"
                width={isScrolled ? 140 : 160}
                height={isScrolled ? 35 : 40}
                className="transition-all duration-300"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <motion.div
                  className="relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                >
                  <span
                    className={`text-base font-semibold transition-all duration-300 ${
                      pathname === link.path
                        ? 'text-[#00A8E1]'
                        : 'text-[#0A2540] hover:text-[#00A8E1]'
                    }`}
                  >
                    {link.name}
                  </span>
                  {pathname === link.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href={ApplicationRoutes.Contact} className="hidden lg:block">
              <motion.button
                className="relative px-7 py-3 cursor-pointer bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white font-bold rounded-lg shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 168, 225, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#0A2540] text-3xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <motion.div
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      pathname === link.path
                        ? 'bg-[#00A8E1] text-white'
                        : 'text-[#0A2540] hover:bg-[#F7FAFC]'
                    }`}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <Link href={ApplicationRoutes.Contact}>
                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white font-semibold rounded-lg shadow-md"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
