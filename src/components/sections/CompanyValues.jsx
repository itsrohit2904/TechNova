import React from 'react';
import { Target, Users, Shield, Lightbulb } from 'lucide-react';

const CompanyValues = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of whats possible in technology.',
      icon: Lightbulb
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
      icon: Target
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their success.',
      icon: Users
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and maintain the highest ethical standards.',
      icon: Shield
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;