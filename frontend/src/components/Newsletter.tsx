import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router


const Newsletter: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-full md:w-4/5 px-6 md:px-0 gap-8">
        {/* Left Section: Text and Buttons */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-4xl font-semibold text-[#002266]">
            Join our weekly newsletter for exciting and inspiring updates
          </h1>

          <p className="text-lg text-gray-600">
            Join our newsletter for updates to our mentorship, your mental health matters.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/get-started"
              className="bg-[#002266] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition"
            >
              View More
            </Link>
            <Link
              to="/learn-more"
              className="bg-white text-[#002266] border-2 border-[#002266] px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition"
            >
              Add Yours
            </Link>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="md:w-1/2 mt-8 md:mt-0 w-full">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#002266] transition w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 mb-2">How do we call you?</label>
              <input
                id="name"
                type="text"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#002266] transition w-full"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#002266] text-white py-3 rounded-md font-medium hover:bg-blue-900 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
