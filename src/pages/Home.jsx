import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesPreview from '../components/sections/ServicesPreview';
import TestimonialSlider from '../components/common/TestimonialSlider';

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <ServicesPreview />
      <TestimonialSlider />
    </div>
  );
};

export default Home;