import React from 'react';
import { Code, Cloud, Brain, Database, Shield, Smartphone } from 'lucide-react';
import Card from '../components/common/Card';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Create responsive, scalable web applications using modern frameworks and best practices. Our expertise includes React, Angular, and Vue.js for frontend development, coupled with robust backend solutions.',
      icon: Code,
      features: ['Custom Web Applications', 'E-commerce Solutions', 'Progressive Web Apps', 'API Development']
    },
    {
      title: 'Cloud Solutions',
      description: 'Leverage cloud technologies to scale your infrastructure, optimize costs, and improve reliability. We provide end-to-end cloud migration and management services.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Implementation', 'Cloud Security']
    },
    {
      title: 'AI/ML Services',
      description: 'Harness the power of artificial intelligence and machine learning to gain insights, automate processes, and drive innovation in your business.',
      icon: Brain,
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Machine Learning Models']
    },
    {
      title: 'Database Management',
      description: 'Design, implement, and optimize database solutions that ensure data integrity, performance, and scalability for your applications.',
      icon: Database,
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup Solutions']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions that identify vulnerabilities and implement robust protection measures.',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance Solutions', 'Security Training']
    },
    {
      title: 'Mobile Development',
      description: 'Build native and cross-platform mobile applications that provide seamless user experiences across all devices.',
      icon: Smartphone,
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'Mobile UI/UX Design']
    }
  ];

  return (
    <div className="py-30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to transform your business and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col">
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="flex-1"
              >
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;