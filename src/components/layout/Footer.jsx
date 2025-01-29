import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">TechNova</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Innovating the future through technology
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Web Development</li>
              <li className="text-gray-600 dark:text-gray-300">Cloud Solutions</li>
              <li className="text-gray-600 dark:text-gray-300">AI/ML Services</li>
              <li className="text-gray-600 dark:text-gray-300">Digital Transformation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">contact@technova.com</li>
              <li className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</li>
              <li className="text-gray-600 dark:text-gray-300">123 Tech Street, Innovation City, 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} TechNova Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;