import React from 'react';

const TeamMember = ({ name, role, bio, image }) => {
  return (
    <div className="text-center">
      <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{name}</h3>
      <p className="text-blue-600 dark:text-blue-400 mb-3">{role}</p>
      <p className="text-gray-600 dark:text-gray-300">{bio}</p>
    </div>
  );
};

export default TeamMember;