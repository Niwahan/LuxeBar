"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export default Navigation;

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-charcoal/90 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <nav className='container mx-auto px-6'>
        <div className='flex items-center justify-between'>
          <Link href='#' className='flex flex-col items-start group'>
            <span className='luxe-serif text-2xl font-bold text-charcoal dark:text-cream tracking-tight group-hover:text-gold transition-colors'>
              LuxeBar
            </span>
            <span className='luxe-sans text-sm text-charcoal/70 dark:text-cream/70 tracking-wide'>
              by Asmie
            </span>
          </Link>

          <div className='flex items-center gap-6'>
            <button
              onClick={toggleTheme}
              className='p-2 text-charcoal dark:text-cream hover:text-gold transition-colors'
              aria-label='Toggle theme'
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Link
              href='#contact'
              className='hidden md:inline-block luxe-sans text-sm font-medium px-6 py-2 bg-gold text-charcoal rounded-none hover:bg-gold-dark transition-colors'
            >
              Enquire Now
            </Link>

            <button
              className='md:hidden p-2 text-charcoal dark:text-cream'
              onClick={() => setIsOpen(!isOpen)}
              aria-label='Toggle menu'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='md:hidden absolute top-full left-0 right-0 bg-white dark:bg-charcoal shadow-lg'
          >
            <div className='container mx-auto px-6 py-8 flex flex-col gap-6'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='luxe-sans text-lg font-medium text-charcoal dark:text-cream hover:text-gold transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href='#contact'
                className='luxe-sans text-lg font-medium px-6 py-3 bg-gold text-charcoal rounded-none hover:bg-gold-dark transition-colors text-center'
                onClick={() => setIsOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}