import Navigation from './components/layout/navigation';
import HeroSection from './components/sections/hero';
import AboutSection from './components/sections/about';
import ServicesSection from './components/sections/services';
import PortfolioSection from './components/sections/portfolio';
import ExperienceSection from './components/sections/experience';
import TestimonialsSection from './components/sections/testimonials';
import InstagramSection from './components/sections/instagram';
import ContactSection from './components/sections/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-white dark:bg-charcoal text-charcoal dark:text-cream transition-colors duration-300'>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialsSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
