import React from 'react';
import HeroSection from './home/HeroSection';
import ClientsSection from './home/ClientsSection';
import AboutSection from './home/AboutSection';
import IndustryExperienceSection from './home/IndustryExperienceSection';
import HowWeWorkSection from './home/HowWeWorkSection';
import WhyChooseUsSection from './home/WhyChooseUsSection';
import StatsCounterSection from './home/StatsCounterSection';
import CTASection from './home/CTASection';
import TestimonialsSection from './home/TestimonialsSection';
import LocationsSection from './home/LocationsSection';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <IndustryExperienceSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />
      <StatsCounterSection />
      <CTASection />
      <TestimonialsSection />
      <LocationsSection />
    </div>
  );
}

export default Home;
