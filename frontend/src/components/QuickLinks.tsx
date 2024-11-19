// src/components/QuickLinks.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
      <Link to="/book-therapy" className="bg-[#002266] text-white text-center py-4 rounded-lg shadow-md hover:bg-blue-900 transition">
        Book Therapy
      </Link>
      <Link to="/content" className="bg-[#002266] text-white text-center py-4 rounded-lg shadow-md hover:bg-blue-900 transition">
        Access Resources
      </Link>
      <Link to="/support-group" className="bg-[#002266] text-white text-center py-4 rounded-lg shadow-md hover:bg-blue-900 transition">
        Join Support Group
      </Link>
      <Link to="/assessments" className="bg-[#002266] text-white text-center py-4 rounded-lg shadow-md hover:bg-blue-900 transition">
       Assesments
      </Link>
      
    </div>
  );
};

export default QuickLinks;
