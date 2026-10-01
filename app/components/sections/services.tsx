"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Calendar, Baby, Star, Gift } from 'lucide-react';
import { services, type Service } from '../../data/services';

const getIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    Heart: <Heart size={32} strokeWidth={1.5} />,
    Calendar: <Calendar size={32} strokeWidth={1.5} />,
    Baby: <Baby size={32} strokeWidth={1.5} />,
    Star: <Star size={32} strokeWidth={1.5} />,
    Gift: <Gift size={32} strokeWidth={1.5} />,
  };
  return icons[iconName] || <Heart size={32} strokeWidth={1.5} />;
};

export default function ServicesSection() {

  return (
    <section id='services' className='py-24 bg-ivory dark:bg-charcoal/95'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='luxe-serif text-4xl md:text-5xl font-bold mb-6 text-charcoal dark:text-cream'>
            Makeup for Every Meaningful Moment
          </h2>
          <div className='w-24 h-px bg-gold mx-auto' />
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <ServiceCardAnimation delay={index * 0.1}>
      <div className='bg-white dark:bg-charcoal/50 p-8 rounded-none shadow-sm hover:shadow-xl transition-all duration-300 group border border-beige/30 dark:border-cream/10 h-full'>
        <div className='text-gold mb-6 group-hover:scale-110 transition-transform duration-300'>
          {service.icon && getIcon(service.icon)}
        </div>

        <h3 className='luxe-serif text-2xl font-bold mb-4 text-charcoal dark:text-cream group-hover:text-gold transition-colors'>
          {service.title}
        </h3>

        <p className='luxe-sans text-charcoal/70 dark:text-cream/70 leading-relaxed mb-6'>
          {service.description}
        </p>

        <div className='pt-4 border-t border-beige/30 dark:border-cream/10'>
          <span className='luxe-sans text-sm font-medium text-gold group-hover:text-gold-dark transition-colors'>
            Enquire for pricing
          </span>
        </div>
      </div>
    </ServiceCardAnimation>
  );
}

function ServiceCardAnimation({ children, delay }: { children: React.ReactNode; delay: number }) {
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