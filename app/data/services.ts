export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'bridal',
    title: 'Bridal Makeup',
    description: 'Personalized bridal makeup looks for the wedding day. Each design celebrates your unique beauty and complements your dress, venue, and personal style.',
    icon: 'Heart',
  },
  {
    id: 'wedding-event',
    title: 'Wedding & Event Makeup',
    description: 'Makeup for weddings, receptions, parties and celebrations. Long-lasting, flawless makeup that enhances your natural beauty for any occasion.',
    icon: 'Calendar',
  },
  {
    id: 'maternity-pregnancy',
    title: 'Maternity & Pregnancy Events',
    description: 'Makeup for maternity shoots and pregnancy celebrations. Soft, natural makeup that celebrates this special time in your life.',
    icon: 'Baby',
  },
  {
    id: 'baby-child-reveal',
    title: 'Baby & Child Reveal Events',
    description: 'Makeup for reveal celebrations and family occasions. Elegant, refined makeup for parents and special guests at baby/later life celebrations.',
    icon: 'Star',
  },
  {
    id: 'special-occasion',
    title: 'Special Occasion Makeup',
    description: 'Makeup for photoshoots, dinners, celebrations and other important moments. Custom looks for your standout moments.',
    icon: 'Gift',
  },
];