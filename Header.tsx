'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  
  const handleNavClick = () => setMenuOpen(false);
  
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-500 ${
              scrolled ? 'glass-nav glow-purple-sm' : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <AppLogo
                size={40}
                className="transition-all duration-300 group-hover:scale-110"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link?.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-secondary transition-all duration-200 glow-purple-sm hover:scale-105 active:scale-95"
              >
                <span className="pixel-dot" />
                Hire Me
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span
                  className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                    menuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks?.map((link, i) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={handleNavClick}
              className="text-2xl font-bold text-foreground hover:text-gradient-purple transition-all duration-200"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-4 px-8 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-bold glow-purple hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </>
  );
}