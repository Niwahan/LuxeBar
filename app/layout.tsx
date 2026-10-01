import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';

import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LuxeBar by Asmie | Makeup Artist',
  description:
    'Luxury makeup artist based in Tasmania, Australia specializing in bridal and special occasion makeup',
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className='bg-white dark:bg-charcoal text-charcoal dark:text-cream transition-colors duration-300'>
        <Script id='luxebar-theme-init' strategy='beforeInteractive'>
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
