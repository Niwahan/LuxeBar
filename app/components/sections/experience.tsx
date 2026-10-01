"use client";

import { motion } from 'motion/react';
import { siteContent, type SiteContent } from '../../data/site';

type ExperienceBenefit = SiteContent['experience']['benefits'][number];

export default function ExperienceSection() {
  const { experience } = siteContent;

  return (
    <section className='py-24 bg-ivory dark:bg-charcoal/95 relative overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='luxe-serif text-4xl md:text-5xl font-bold mb-6 text-charcoal dark:text-cream'>
            {experience.title}
          </h2>
          <div className='w-24 h-px bg-gold mx-auto' />
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          {experience.benefits.map((benefit, index) => (
            <ExperienceCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ benefit, index }: { benefit: ExperienceBenefit; index: number }) {
  return (
    <ExperienceCardAnimation delay={index * 0.1}>
      <div className='text-center group'>
        <div className='w-20 h-20 mx-auto mb-6 bg-linear-to-br from-gold/20 to-gold/10 dark:from-gold/10 dark:to-gold/5 rounded-none flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
          <div className='w-12 h-12 bg-gold/30 rounded-none flex items-center justify-center'>
            <span className='luxe-serif text-gold font-bold text-xl'>{(index + 1).toString().padStart(2, '0')}</span>
          </div>
        </div>

        <h3 className='luxe-serif text-xl font-bold mb-4 text-charcoal dark:text-cream group-hover:text-gold transition-colors'>
          {benefit.title}
        </h3>

        <p className='luxe-sans text-charcoal/70 dark:text-cream/70 leading-relaxed'>
          {benefit.description}
        </p>
      </div>
    </ExperienceCardAnimation>
  );
}

function ExperienceCardAnimation({ children, delay }: { children: React.ReactNode; delay: number }) {
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