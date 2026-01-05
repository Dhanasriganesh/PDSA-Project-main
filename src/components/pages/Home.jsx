import React from 'react';
import HeroSection from '../sections/HeroSection';
import ClientsSection from '../sections/ClientsSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import IndustryExperienceSection from '../sections/IndustryExperienceSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import CTASection from '../sections/CTASection';
import TestimonialsSection from '../sections/TestimonialsSection';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <IndustryExperienceSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CTASection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;