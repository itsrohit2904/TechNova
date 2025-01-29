import React, { useState, useEffect } from 'react';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc",
      content: "TechNova transformed our digital infrastructure completely. Their cloud solutions helped us scale efficiently and securely.",
      image: "/api/placeholder/64/64"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, InnovateLabs",
      content: "The AI solutions provided by TechNova have revolutionized how we handle data analytics. Exceptional service!",
      image: "/api/placeholder/64/64"
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Product Manager, FutureTech",
      content: "Working with TechNova was a game-changer. Their web development team delivered beyond our expectations.",
      image: "/api/placeholder/64/64"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-16">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-blue-600' 
                : 'bg-gray-300 hover:bg-blue-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;