'use client';
import React from 'react';
import HeroSection from './HeroSection';
import IntroductionSection from './IntroductionSection';
import ServicesGrid from './ServicesGrid';
import WhyChooseUs from './WhyChooseUs';
import ProcessSection from './ProcessSection';
import TestimonialsSection from './TestimonialsSection';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      {/* <TestimonialsSection /> */}
    </div>
  );
};

export default Homepage;

