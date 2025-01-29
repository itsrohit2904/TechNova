import React from 'react';
import Card from '../common/Card';
import { Code, Cloud, Brain } from 'lucide-react';
import Button from '../common/Button';

const ServicesPreview = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Create stunning, responsive websites and web applications using cutting-edge technologies.',
      icon: Code
    },
    {
      title: 'Cloud Solutions',
      description: 'Scale your business with secure, reliable, and efficient cloud infrastructure.',
      icon: Cloud
    },
    {
      title: 'AI/ML Services',
      description: 'Leverage the power of artificial intelligence to transform your business processes.',
      icon: Brain
    }
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover how our comprehensive range of services can help your business thrive in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="text-center">
        <Button href="/services" variant="outline">View All Services</Button>
      </div>
    </section>
  );
};

export default ServicesPreview;