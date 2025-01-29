import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800'
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;