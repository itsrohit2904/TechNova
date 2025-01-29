import React, { useState } from 'react';
import ContactForm from '../components/sections/ContactForm';

const Contact = () => {
  return (
    <div className="py-30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
            Get in touch with our team to discuss how we can help transform your business.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Our Office
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  123 Tech Street<br />
                  Innovation City, ST 12345<br />
                  United States
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Contact Information
                </h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>Email: contact@technova.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              {/* Map Integration */}
              <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  title="Office Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Space+Needle,Seattle+WA"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;