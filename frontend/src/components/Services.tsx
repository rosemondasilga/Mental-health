// src/components/Features.tsx
import React from 'react';
import { FaHandsHelping, FaBookOpen, FaComments, FaMapMarkedAlt } from 'react-icons/fa'; // Example icons

const features = [
  {
    icon: <FaHandsHelping className="text-4xl text-[#002266]" />,
    title: 'Peer Support',
    description: 'Join our supportive community to connect with others who understand your journey.',
    link: '/learn-more'
  },
  {
    icon: <FaBookOpen className="text-4xl text-[#002266]" />,
    title: 'Educational Resources',
    description: 'Access a wealth of articles, videos, and infographics on mental health topics.',
    link: '/learn-more'
  },
  {
    icon: <FaComments className="text-4xl text-[#002266]" />,
    title: 'Anonymous Chat',
    description: 'Speak anonymously with trained volunteers for emotional support.',
    link: '/learn-more'
  },
  {
    icon: <FaMapMarkedAlt className="text-4xl text-[#002266]" />,
    title: 'Resource Locator',
    description: 'Find nearby mental health professionals and resources with our geolocation tool.',
    link: '/learn-more'
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-[#f9f9ff] py-12">
        <h1 className='text-4xl text-[#002266] font-semibold mb-4 w-full md:w-4/5 mx-auto px-6 md:px-0'>Features</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-4/5 px-6 md:px-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border shadow-md cursor-pointer text-center hover:shadow-lg transition justify-center items-center flex flex-col"
          >
            <div className="mb-8">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
            <a
              href={feature.link}
              className="text-[#002266] font-medium text-left hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
