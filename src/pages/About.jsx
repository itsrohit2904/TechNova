import React from 'react';
import TeamMember from '../components/sections/TeamMember';
import CompanyValues from '../components/sections/CompanyValues';
import myImage from '../assets/image.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'David Anderson',
      role: 'Chief Executive Officer',
      bio: 'With over 20 years of experience in technology leadership, David drives TechNova\'s vision of innovation and excellence.',
      image:myImage
    },
    {
      name: 'Maria Garcia',
      role: 'Chief Technology Officer',
      bio: 'Maria leads our technical strategy and ensures we remain at the forefront of technological advancement.',
      image: myImage
    },
    {
      name: 'James Wilson',
      role: 'Head of AI/ML',
      bio: 'James brings extensive expertise in artificial intelligence and machine learning to drive our innovative solutions.',
      image: myImage
    },
    {
      name: 'Linda Chen',
      role: 'Director of Operations',
      bio: 'Linda ensures smooth execution of our projects and maintains our high standards of service delivery.',
      image: myImage
    }
  ];

  return (
    <div className="py-30">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            About TechNova Innovations
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              At TechNova Innovations, we are dedicated to transforming businesses through cutting-edge technology solutions. Our mission is to empower organizations to thrive in the digital age by providing innovative, scalable, and reliable technical solutions.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <CompanyValues />

        {/* Team Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;