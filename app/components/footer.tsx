"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/data/site';

export default function Footer() {
  const { footer, contact } = siteContent;

  return (
    <footer className='bg-charcoal dark:bg-charcoal/95 text-cream py-16'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-3 gap-12 mb-12'>
          <div>
            <Link href='#' className='inline-block mb-6'>
              <span className='luxe-serif text-2xl font-bold text-white block'>{footer.brand}</span>
              <span className='luxe-sans text-sm text-cream/70'>{footer.tagline}</span>
            </Link>
            <p className='luxe-sans text-cream/60 text-sm max-w-xs'>
              Luxury makeup artistry for brides, celebrations, and special occasions in Tasmania, Australia.
            </p>
            <p className='luxe-sans text-cream/40 text-xs mt-4'>
              Prototype imagery is temporary stock photography from Unsplash and Pexels, used under
              their respective free licenses.
            </p>
          </div>

          <div>
            <h4 className='luxe-sans font-semibold text-lg mb-6 text-white'>Navigation</h4>
            <ul className='space-y-3 luxe-sans text-sm'>
              {Object.entries(footer.nav).map(([key, label]) => (
                <li key={key}>
                  <Link
                    href={`#${key === 'home' ? '' : key}`}
                    className='text-cream/70 hover:text-gold transition-colors'
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='luxe-sans font-semibold text-lg mb-6 text-white'>Contact</h4>
            <div className='space-y-3 luxe-sans text-sm text-cream/70'>
              <p className='flex items-center gap-3'>
                <Phone size={16} className='text-gold shrink-0' />
                {contact.phone}
              </p>
              <p className='flex items-center gap-3'>
                <Mail size={16} className='text-gold shrink-0' />
                {contact.email}
              </p>
              <p className='flex items-center gap-3'>
                <a href={`https://instagram.com/${contact.instagram.replace(/^@/, '')}`} target='_blank' rel='noopener noreferrer' className='luxe-sans text-cream/70 hover:text-gold transition-colors'>
                  {contact.instagram}
                </a>
              </p>
              <p className='flex items-center gap-3'>
                <MapPin size={16} className='text-gold shrink-0' />
                {contact.location}
              </p>
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='luxe-sans text-sm text-cream/60'>{footer.copyright}</p>
          <div className='flex gap-6 luxe-sans text-sm text-cream/60'>
            <Link href='#' className='hover:text-gold transition-colors'>Privacy Policy</Link>
            <Link href='#' className='hover:text-gold transition-colors'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}