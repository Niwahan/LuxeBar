"use client";

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { siteContent } from '../../data/site';

export default function AboutSection() {
  const { about } = siteContent;

  return (
    <section id='about' className='py-24 bg-ivory dark:bg-charcoal/95 relative'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <span className='luxe-sans text-gold uppercase tracking-widest text-sm font-medium mb-4 block'>
            {about.eyebrow}
          </span>
          <h2 className='luxe-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-cream'>
            {about.title}
          </h2>
          <div className='w-24 h-px bg-gold mx-auto mt-6' />
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
          <AboutImageAnimation delay={0}>
            <div className='relative group'>
              <div className='absolute -inset-4 bg-gold/20 rounded-none transform rotate-3 group-hover:rotate-6 transition-transform duration-300' />
              <div className='relative aspect-[3/4] overflow-hidden rounded-none border-2 border-gold/30 group-hover:border-gold/50 transition-colors duration-300'>
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  sizes='(min-width: 768px) 45vw, 100vw'
                  className='object-cover'
                />
              </div>
            </div>
          </AboutImageAnimation>

          <AboutTextAnimation delay={0.2}>
            <div className='space-y-6'>
              {about.content.map((paragraph, index) => (
                <p key={index} className='luxe-sans text-charcoal/80 dark:text-cream/80 leading-relaxed text-lg'>
                  {paragraph}
                </p>
              ))}

              <div className='pt-8'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='luxe-sans font-medium px-8 py-4 bg-gold text-charcoal hover:bg-gold-dark transition-all duration-300'
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </AboutTextAnimation>
        </div>
      </div>
    </section>
  );
}

function AboutImageAnimation({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function AboutTextAnimation({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}