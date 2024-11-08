// src/components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../public/mlogo.svg'; // Correct path for logo

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={`bg-[#F9F9FF] text-white w-64 space-y-6 py-7 px-4 absolute h-screen inset-y-0 left-0 transform  ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:w-64`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">
        <img src={Logo} alt="" />
        </Link>
      </div>

      {/* Sidebar Links */}
      <nav>
        <ul className="space-y-4 text-gray-800">
         
          <li>
            <Link to="/dashboard" className={`hover:bg-gray-500 block py-2 px-4 rounded ${isActive('/dashboard') ? 'bg-gray-700 text-white' : ''}`}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/content" className={`hover:bg-gray-500 hover:text-white block py-2 px-4 rounded ${isActive('/content') ? 'bg-gray-700 text-white' : ''}`}>
            Content
            </Link>
          </li>

          <li>
            <Link to="/find-help" className={`hover:bg-gray-500 hover:text-white block py-2 px-4 rounded ${isActive('/find-help') ? 'bg-gray-700 text-white' : ''}`}>
           Find Help
            </Link>
          </li>
          <li>
            <Link to="/assessments" className={`hover:bg-gray-500 hover:text-white block py-2 px-4 rounded ${isActive('/assessments') ? 'bg-gray-700 text-white' : ''}`}>
          Assesments
            </Link>
          </li>

          {/* Contents Section with Resources and Events */}
        
          <li>
            <Link to="/profile" className={`hover:bg-gray-500 hover:text-white block py-2 px-4 rounded ${isActive('/profile') ? 'bg-gray-700 text-white' : ''}`}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/settings" className={`hover:bg-gray-500 hover:text-white block py-2 px-4 rounded ${isActive('/settings') ? 'bg-gray-700 text-white' : ''}`}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
