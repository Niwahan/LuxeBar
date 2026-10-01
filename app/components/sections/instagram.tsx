"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { instagramImages, siteContent } from '@/data/site';

function InstagramImageAnimation({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export { InstagramImageAnimation };

export default function InstagramSection() {
  const { instagram } = siteContent;

  return (
    <section className='py-24 bg-ivory dark:bg-charcoal/95 relative overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='luxe-serif text-4xl md:text-5xl font-bold mb-6 text-charcoal dark:text-cream'>
            {instagram.title}
          </h2>
          <div className='w-24 h-px bg-gold mx-auto mb-6' />
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12'>
          {instagramImages.map((image, index) => (
            <InstagramImageAnimation key={image.id} delay={index * 0.08}>
              <a
                href={`https://instagram.com/${instagram.username.replace(/^@/, '')}`}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative block aspect-square overflow-hidden'
                aria-label={`Follow ${instagram.username} on Instagram`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes='(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-linear-to-b from-charcoal/40 via-charcoal/10 to-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <div className='absolute bottom-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14.752 11.168l-3.197-2.069A1 1 0 0010 9.431v1.415a1 1 0 001.55 1.077l2.36 1.522m.758-5.298a1 1 0 011.272.728l2.98 1.035a1 1 0 01-.5 1.89l-1.254 2.165m-1.808.368a1 1 0 01-1.232.137l-3.197.695a1 1 0 01-.987-1.246l2.233-3.688a1 1 0 01.648-.576h1z'
                    />
                  </svg>
                </div>
              </a>
            </InstagramImageAnimation>
          ))}
        </div>

        <div className='text-center'>
          <a
            href={`https://instagram.com/${instagram.username.replace(/^@/, '')}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-3 luxe-sans font-medium px-8 py-4 bg-transparent border border-gold text-charcoal dark:text-cream hover:bg-gold hover:text-charcoal transition-all duration-300'
          >
            {instagram.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
