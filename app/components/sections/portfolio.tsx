"use client";

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { portfolioItems, type PortfolioItem as PortfolioItemData } from '../../data/site';

export default function PortfolioSection() {
  const [filter, setFilter] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(portfolioItems.map((item) => item.category)))],
    []
  );

  const filteredItems = useMemo(
    () => (filter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === filter)),
    [filter]
  );

  useEffect(() => {
    setCurrentIndex(null);
  }, [filter]);

  const closeLightbox = () => setCurrentIndex(null);

  const navigateImage = (direction: 'prev' | 'next') => {
    setCurrentIndex((previous) => {
      if (previous === null) return previous;
      const next = direction === 'prev' ? previous - 1 : previous + 1;
      if (next < 0 || next >= filteredItems.length) return previous;
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') navigateImage('prev');
      if (event.key === 'ArrowRight') navigateImage('next');
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [filteredItems.length]);

  return (
    <section id='portfolio' className='py-24 bg-white dark:bg-charcoal'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='luxe-serif text-4xl md:text-5xl font-bold mb-6 text-charcoal dark:text-cream'>
            Portfolio
          </h2>
          <div className='w-24 h-px bg-gold mx-auto mb-12' />

          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {categories.map((category) => (
              <button
                key={category}
                type='button'
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={cn(
                  'luxe-sans px-6 py-2 rounded-none transition-all duration-300',
                  filter === category
                    ? 'bg-gold text-charcoal font-medium'
                    : 'bg-beige/20 text-charcoal/70 dark:text-cream/70 hover:bg-gold/20'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr'>
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {currentIndex !== null && (
          <Lightbox
            item={filteredItems[currentIndex] ?? null}
            position={currentIndex}
            total={filteredItems.length}
            onClose={closeLightbox}
            onNavigate={navigateImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function PortfolioCard({
  item,
  index,
  onClick,
}: {
  item: PortfolioItemData;
  index: number;
  onClick: () => void;
}) {
  return (
    <PortfolioCardAnimation delay={index * 0.1}>
      <motion.button
        type='button'
        onClick={onClick}
        className='group relative block w-full h-full overflow-hidden bg-beige/10 dark:bg-cream/5 cursor-pointer text-left'
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        aria-label={`View ${item.title}`}
      >
        <div className='relative aspect-[3/4] overflow-hidden bg-beige/20 dark:bg-cream/5'>
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
            className='object-cover transition-transform duration-700 group-hover:scale-105'
          />

          <div className='absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

          <div className='absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
            <span className='inline-block luxe-sans text-xs font-medium text-gold mb-2 uppercase tracking-wider'>
              {item.category}
            </span>
            <h3 className='luxe-serif text-xl font-bold text-white mb-2'>{item.title}</h3>
            <div className='w-12 h-px bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' />
          </div>

          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300'>
              <ChevronRight size={24} className='text-charcoal' />
            </div>
          </div>
        </div>
      </motion.button>
    </PortfolioCardAnimation>
  );
}

function PortfolioCardAnimation({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function Lightbox({
  item,
  position,
  total,
  onClose,
  onNavigate,
}: {
  item: PortfolioItemData | null;
  position: number;
  total: number;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-label={item?.title ?? 'Portfolio image'}
    >
      <button
        type='button'
        onClick={onClose}
        className='absolute top-6 right-6 text-white hover:text-gold transition-colors z-10'
        aria-label='Close lightbox'
      >
        <X size={32} />
      </button>

      {position > 0 && (
        <button
          type='button'
          onClick={(event) => {
            event.stopPropagation();
            onNavigate('prev');
          }}
          className='absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors z-10'
          aria-label='Previous image'
        >
          <ChevronLeft size={48} />
        </button>
      )}

      {position < total - 1 && (
        <button
          type='button'
          onClick={(event) => {
            event.stopPropagation();
            onNavigate('next');
          }}
          className='absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors z-10'
          aria-label='Next image'
        >
          <ChevronRight size={48} />
        </button>
      )}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='relative max-w-6xl max-h-[90vh] w-full h-full'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='relative w-full h-full'>
          {item && (
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes='90vw'
              className='object-contain'
              priority
            />
          )}
        </div>

        <div className='absolute bottom-6 left-6 text-white'>
          <h3 className='luxe-serif text-2xl font-bold mb-2'>{item?.title}</h3>
          <p className='luxe-sans text-cream/80'>{item?.category}</p>
        </div>

        <div className='absolute bottom-6 right-6 text-white/60 luxe-sans text-sm'>
          {position + 1} / {total}
        </div>
      </motion.div>
    </motion.div>
  );
}
