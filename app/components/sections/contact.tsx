"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '../../data/site';

export default function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id='contact' className='py-24 bg-white dark:bg-charcoal relative overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='luxe-serif text-4xl md:text-5xl font-bold mb-6 text-charcoal dark:text-cream'>
            {contact.title}
          </h2>
          <p className='luxe-sans text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto'>
            {contact.subtitle}
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16'>
          <div>
            <h3 className='luxe-serif text-2xl font-bold mb-8 text-charcoal dark:text-cream'>
              Get in Touch
            </h3>

            <div className='space-y-6'>
              <ContactInfo
                icon={<Phone size={20} />}
                label='Phone'
                value={contact.phone}
                href={`tel:${contact.phone.replace(/[+\s]/g, '')}`}
              />
              <ContactInfo
                icon={<Phone size={20} />}
                label='WhatsApp'
                value={contact.whatsapp}
                href={`https://wa.me/${contact.whatsapp.replace(/[+\s]/g, '')}`}
              />
              <ContactInfo
                icon={<Mail size={20} />}
                label='Email'
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactInfo
                icon={<MapPin size={20} />}
                label='Location'
                value={`${contact.location} - ${contact.serviceArea}`}
              />
            </div>
          </div>

          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className='flex items-start gap-4 group'>
      <div className='text-gold mt-1 group-hover:scale-110 transition-transform duration-300'>
        {icon}
      </div>
      <div>
        <p className='luxe-sans text-sm font-medium text-charcoal/70 dark:text-cream/70 mb-1'>{label}</p>
        <p className='luxe-sans text-charcoal dark:text-cream group-hover:text-gold transition-colors'>{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className='block'>
        {content}
      </a>
    );
  }

  return content;
}

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const eventTypes = [
    'Wedding',
    'Bridal Party',
    'Maternity Shoot',
    'Baby Reveal',
    'Special Occasion',
    'Other',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        preferredDate: '',
        message: '',
      });

      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='bg-ivory dark:bg-charcoal/50 p-8 rounded-none border border-beige/30 dark:border-cream/10'
    >
      <h3 className='luxe-serif text-2xl font-bold mb-6 text-charcoal dark:text-cream'>Send Enquiry</h3>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className='mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-none luxe-sans text-green-800 dark:text-green-200'
          >
            Thank you for your enquiry! We will get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid sm:grid-cols-2 gap-6'>
          <div>
            <label htmlFor='name' className='block luxe-sans text-sm font-medium text-charcoal/70 dark:text-cream/70 mb-2'>
              Name *
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={inputClassName(errors.name)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  id='name-error'
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className='mt-1 luxe-sans text-sm text-red-600 dark:text-red-400'
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label htmlFor='email' className='block luxe-sans text-sm font-medium text-charcoal/70 dark:text-cream/70 mb-2'>
              Email *
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={inputClassName(errors.email)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  id='email-error'
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className='mt-1 luxe-sans text-sm text-red-600 dark:text-red-400'
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 gap-6'>
          <div>
            <label htmlFor='phone' className='block luxe-sans text-sm font-medium text-charcoal/70 dark:text-cream/70 mb-2'>
              Phone
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className={inputClassName()}
            />
          </div>

          <div>
            <label htmlFor='eventType' className='block luxe-sans text-sm font-medium text-charcoal/70 dark:text-cream/70 mb-2'>
              Event Type
            </label>
            <select
              id='eventType'
              name='eventType'
              value={formData.eventType}
              onChange={handleChange}
              className={selectClassName()}
            >
              <option value=''>Select event type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type} className='bg-white dark:bg-charcoal'>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor='preferredDate' className='block luxe-sans text-sm font-medium text-charcoal/70 dark:text-cream/70 mb-2'>
            Preferred Date
          </label>
          <input
            type='date'
            id='preferredDate'
            name='preferredDate'
            value={formData.preferredDate}
            onChange={handleChange}
            className={inputClassName()}
          />
        </div>

        <div>
          <label htmlFor='message' className='block luxe-sans text-sm font-medium text-charcoal/70 dark:text-cream/70 mb-2'>
            Message *
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={textareaClassName(errors.message)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                id='message-error'
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className='mt-1 luxe-sans text-sm text-red-600 dark:text-red-400'
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type='submit'
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='w-full luxe-sans font-medium px-8 py-4 bg-gold text-charcoal hover:bg-gold-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmitting ? 'Sending...' : 'Send Enquiry'}
        </motion.button>
      </form>
    </motion.div>
  );
}

function inputClassName(error?: string) {
  return `w-full luxe-sans px-4 py-3 border rounded-none focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white dark:bg-charcoal/50 text-charcoal dark:text-cream ${error ? 'border-red-500 dark:border-red-400' : 'border-beige/30 dark:border-cream/10'}`;
}

function textareaClassName(error?: string) {
  return `w-full luxe-sans px-4 py-3 border rounded-none focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white dark:bg-charcoal/50 text-charcoal dark:text-cream resize-none ${error ? 'border-red-500 dark:border-red-400' : 'border-beige/30 dark:border-cream/10'}`;
}

function selectClassName() {
  return 'w-full luxe-sans px-4 py-3 border rounded-none focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white dark:bg-charcoal/50 text-charcoal dark:text-cream border-beige/30 dark:border-cream/10';
}