"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials, type Testimonial } from '../../data/site';

export default function TestimonialsSection() {
  return (
    <section className='py-24 bg-white dark:bg-charcoal'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='luxe-serif text-4xl md:text-5xl font-bold mb-6 text-charcoal dark:text-cream'>
            Client Testimonials
          </h2>
          <div className='w-24 h-px bg-gold mx-auto mb-6' />
          <p className='luxe-sans text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto'>
            Hear from clients who have experienced the LuxeBar difference. All testimonials are placeholders — replace with real client reviews.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <TestimonialCardAnimation delay={index * 0.1}>
      <div className='bg-ivory dark:bg-charcoal/50 p-8 rounded-none border border-beige/30 dark:border-cream/10 group hover:shadow-lg transition-all duration-300 h-full'>
        <div className='flex items-center mb-6'>
          <div className='relative w-16 h-16 shrink-0 rounded-none overflow-hidden mr-4 border-2 border-gold/30'>
            <div className='absolute inset-0 bg-charcoal/80 flex items-center justify-center text-gold text-sm font-medium'>
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className='luxe-serif text-lg font-bold text-charcoal dark:text-cream group-hover:text-gold transition-colors'>
              {testimonial.name}
            </h3>
            <p className='luxe-sans text-sm text-gold font-medium'>{testimonial.role}</p>
          </div>
        </div>

        <div className='flex mb-4'>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className='text-gold fill-current' />
          ))}
        </div>

        <p className='luxe-sans text-charcoal/70 dark:text-cream/70 leading-relaxed italic'>
          "{testimonial.content}"
        </p>
      </div>
    </TestimonialCardAnimation>
  );
}

function TestimonialCardAnimation({ children, delay }: { children: React.ReactNode; delay: number }) {
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