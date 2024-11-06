// src/components/Hero.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router
import HeroImage from '../../public/Overwhelmed-amico.png'; // Adjust the path to your image

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full md:w-4/5 px-6 md:px-0">
        {/* Left Section: Text and Buttons */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-4xl font-semibold text-gray-800">
          Your Journey to <span className='text-[#002266]'>Better</span>
          </h1>
          <h1 className='text-4xl font-semibold text-gray-800 -mt-[-10]'>mental health starts here</h1>
          <p className="text-lg text-gray-600">
            Discover resources, connect with peers, and find the support you need for your mental well-being.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/get-started"
              className="bg-[#002266] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition"
            >
              Get Started
            </Link>
            <Link
              to="/learn-more"
              className="bg-white text-[#002266] border-2 border-[#002266] px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={HeroImage} alt="Mental health hero" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
