import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, InnovaTech Solutions',
    content: 'TechNova transformed our digital infrastructure with their cloud solutions. The efficiency gains and cost savings have been remarkable.',
    image: '/api/placeholder/64/64'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, DataFlow Analytics',
    content: 'The AI/ML solutions provided by TechNova helped us unlock valuable insights from our data, driving better business decisions.',
    image: '/api/placeholder/64/64'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Engineering, WebScale',
    content: 'Their web development team delivered a stunning, high-performance application that exceeded our expectations.',
    image: '/api/placeholder/64/64'
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <blockquote className="text-center">
                  <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;