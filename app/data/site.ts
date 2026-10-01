export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Soft Glam' | 'Glam' | 'Events';
  image: string;
  alt: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export interface SiteContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    content: string[];
    image: string;
    imageAlt: string;
  };
  experience: {
    title: string;
    benefits: {
      title: string;
      description: string;
    }[];
  };
  instagram: {
    title: string;
    username: string;
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    whatsapp: string;
    email: string;
    instagram: string;
    location: string;
    serviceArea: string;
  };
  footer: {
    brand: string;
    tagline: string;
    nav: {
      home: string;
      about: string;
      services: string;
      portfolio: string;
      contact: string;
    };
    contact: string;
    location: string;
    copyright: string;
  };
}

export const siteContent: SiteContent = {
  hero: {
    eyebrow: 'LuxeBar by Asmie',
    title: 'Luxury Makeup for Your Most Memorable Moments.',
    subtitle: 'Personalized makeup artistry for brides, celebrations, and special occasions. Creating looks that enhance your natural beauty and capture the essence of your unique moment.',
    ctaPrimary: 'Enquire Now',
    ctaSecondary: 'Explore My Work',
    image: '/images/hero/hero-portrait.jpg',
    imageAlt: 'Bride wearing a veil with soft, luminous bridal makeup',
  },
  about: {
    eyebrow: 'MEET ASMIE',
    title: 'Makeup that feels like you, only elevated.',
    image: '/images/about/about-portrait.jpg',
    imageAlt: 'Model with soft natural makeup in warm golden-hour light',
    content: [
      'I believe that great makeup should never try to be you — it should amplify who you already are. Each makeup look is personalized to your unique features, skin tone, and the specific occasion at hand.',
      'Whether it is a wedding day transformation or a special celebration, my approach focuses on creating timeless, elegant results that allow you to feel confident and beautiful throughout your special moment.',
      'From classic editorial techniques to contemporary artistic expression, I bring a sophisticated understanding of color theory, light, and form to create looks that are both Instagram-worthy and authentic for your real-life moments.',
    ],
  },
  experience: {
    title: 'More Than Makeup. It\'s Your Moment.',
    benefits: [
      {
        title: 'Personalized',
        description: 'Every look is tailored to the person and occasion, creating unique makeup that enhances your individual features.',
      },
      {
        title: 'Refined',
        description: 'Attention to detail throughout the makeup experience, ensuring flawless application and perfect finishing.',
      },
      {
        title: 'Camera Ready',
        description: 'Looks designed to photograph beautifully as well as look beautiful in person, creating timeless memories.',
      },
      {
        title: 'Made for You',
        description: 'The goal is to enhance individual features rather than create one generic look, celebrating your unique beauty.',
      },
    ],
  },
  instagram: {
    title: 'See More of the LuxeBar Look',
    username: '@luxebarbyasmie',
    cta: 'Follow on Instagram',
  },
  contact: {
    title: 'Let\'s Create Your Look',
    subtitle: 'Planning a wedding, celebration, or special moment? Get in touch with Asmie to discuss your look.',
    phone: '+61 400 000 000',
    whatsapp: '+61 400 000 000',
    email: 'hello@luxebar.example',
    instagram: '@luxebarbyasmie',
    location: 'Tasmania, Australia',
    serviceArea: 'Available for travel within Australia',
  },
  footer: {
    brand: 'LuxeBar',
    tagline: 'by Asmie',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    contact: 'Contact',
    location: 'Tasmania, Australia',
    copyright: '© 2024 LuxeBar by Asmie. All rights reserved.',
  },
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'bridal-prep',
    title: 'Bridal Prep, Two Artists',
    category: 'Bridal',
    image: '/images/portfolio/bridal-1.jpg',
    alt: 'Two makeup artists applying bridal makeup to a bride',
  },
  {
    id: 'bridal-mirror',
    title: 'The Mirror Moment',
    category: 'Bridal',
    image: '/images/portfolio/bridal-2.jpg',
    alt: 'Bride applying lipstick in a mirror before the wedding',
  },
  {
    id: 'bridal-lace',
    title: 'Lace and Luminous Skin',
    category: 'Bridal',
    image: '/images/portfolio/bridal-3.jpg',
    alt: 'Elegant bridal portrait in a lace gown',
  },
  {
    id: 'bridal-pearls',
    title: 'Pearl Finish',
    category: 'Bridal',
    image: '/images/portfolio/bridal-4.jpg',
    alt: 'Woman in pearls applying lip gloss',
  },
  {
    id: 'soft-glow',
    title: 'Soft Glow',
    category: 'Soft Glam',
    image: '/images/portfolio/soft-glam-1.jpg',
    alt: 'Close-up beauty portrait with soft radiant makeup',
  },
  {
    id: 'soft-light',
    title: 'Soft Light',
    category: 'Soft Glam',
    image: '/images/portfolio/soft-glam-2.jpg',
    alt: 'Close-up portrait during a soft-lit makeup application',
  },
  {
    id: 'glam-editorial',
    title: 'Editorial Glam',
    category: 'Glam',
    image: '/images/portfolio/glam-1.jpg',
    alt: 'Editorial portrait with bold statement makeup',
  },
  {
    id: 'glam-studio',
    title: 'Studio Session',
    category: 'Glam',
    image: '/images/portfolio/glam-2.jpg',
    alt: 'Professional makeup application in a studio',
  },
  {
    id: 'celebration-ready',
    title: 'Celebration Ready',
    category: 'Events',
    image: '/images/portfolio/event-1.jpg',
    alt: 'Studio portrait of a woman with soft polished makeup',
  },
  {
    id: 'everyday-glow',
    title: 'Everyday Glow',
    category: 'Events',
    image: '/images/portfolio/event-2.jpg',
    alt: 'Woman smiling with light natural makeup',
  },
];

export const instagramImages = [
  { id: '1', src: '/images/portfolio/bridal-1.jpg', alt: 'Bridal makeup being applied by two artists' },
  { id: '2', src: '/images/portfolio/bridal-3.jpg', alt: 'Bridal portrait in a lace gown' },
  { id: '3', src: '/images/portfolio/soft-glam-1.jpg', alt: 'Soft glam close-up portrait' },
  { id: '4', src: '/images/portfolio/soft-glam-2.jpg', alt: 'Soft-lit makeup application' },
  { id: '5', src: '/images/portfolio/glam-1.jpg', alt: 'Bold editorial glam makeup' },
  { id: '6', src: '/images/portfolio/glam-2.jpg', alt: 'Studio makeup session' },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'PLACEHOLDER — REPLACE WITH REAL CLIENT REVIEW',
    role: 'Bride',
    content: 'PLACEHOLDER — REPLACE WITH REAL CLIENT REVIEW — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    id: '2',
    name: 'PLACEHOLDER — REPLACE WITH REAL CLIENT REVIEW',
    role: 'Client',
    content: 'PLACEHOLDER — REPLACE WITH REAL CLIENT REVIEW — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
  },
  {
    id: '3',
    name: 'PLACEHOLDER — REPLACE WITH REAL CLIENT REVIEW',
    role: 'Client',
    content: 'PLACEHOLDER — REPLACE WITH REAL CLIENT REVIEW — Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
  },
];
