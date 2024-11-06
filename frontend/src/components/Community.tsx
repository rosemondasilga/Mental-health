// src/components/Community.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router
import HeroImage from '../../public/Group therapy-rafiki.png'; // Adjust the path to your image

const Community: React.FC = () => {
  return (
    <section className="bg-[#f9f9ff] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full md:w-4/5 px-6 md:px-0">

      <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={HeroImage} alt="Mental health hero" className="w-full h-auto" />
        </div>
        {/* Left Section: Text and Buttons */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-4xl font-semibold text-[#002266]">
          FIND A COMMUNITY! FIND MEMBERSHIP!
          </h1>
        
          <p className="text-lg text-gray-600">
          We have people who are ready to help 24/7, unjudgementally.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/get-started"
              className="bg-[#002266] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition"
            >
            Book therapy
            </Link>
            <Link
              to="/learn-more"
              className="bg-white text-[#002266] border-2 border-[#002266] px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition"
            >
              Join community
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
       
      </div>
    </section>
  );
};

export default Community;
