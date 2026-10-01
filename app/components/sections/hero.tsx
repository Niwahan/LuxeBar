"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { siteContent } from '../../data/site';

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes='100vw'
        className='object-cover object-center'
      />

      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-linear-to-b from-charcoal/80 via-charcoal/55 to-charcoal/85' />
      </div>

      <div className='container mx-auto px-6 relative z-10 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className='mb-6'>
            <span className='luxe-sans text-gold uppercase tracking-widest text-sm font-medium'>
              {hero.eyebrow}
            </span>
          </div>

          <h1 className='luxe-serif text-5xl md:text-7xl lg:text-[6rem] font-bold text-white mb-8 leading-tight'>
            {hero.title}
          </h1>

          <p className='luxe-sans text-lg md:text-xl text-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed'>
            {hero.subtitle}
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='luxe-sans font-medium px-8 py-4 bg-gold text-charcoal hover:bg-gold-dark transition-all duration-300'
            >
              {hero.ctaPrimary}
            </motion.a>

            <motion.a
              href='#portfolio'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='luxe-sans font-medium px-8 py-4 border border-cream/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm'
            >
              {hero.ctaSecondary}
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
      >
        <div className='w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-cream/50 rounded-full mt-2 animate-bounce' />
        </div>
      </motion.div>
    </section>
  );
}