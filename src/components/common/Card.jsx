import React from 'react';

const Card = ({ title, description, icon: Icon, className = '' }) => {
  return (
    <div className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      {Icon && (
        <div className="mb-4 text-blue-600 dark:text-blue-400">
          <Icon className="w-10 h-10" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default Card;