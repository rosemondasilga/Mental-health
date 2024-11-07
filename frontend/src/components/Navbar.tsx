// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserCircle, FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';


const Navbar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default language is English

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setLanguageDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="bg-[#F9F9FF] text-white p-4 top-0 sticky ">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-full overflow-hidden text-black w-1/3">
          <FaSearch className="ml-3 text-gray-500" />
          <input
            type="text"
            className="px-4 py-2 w-full focus:outline-none"
            placeholder="Search..."
          />
        </div>

        {/* Links and Profile (visible on larger screens) */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* Language Toggle */}
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="text-sm flex items-center space-x-1 cursor-pointer text-gray-800"
            >
              <span>{selectedLanguage}</span>
              <IoIosArrowDown />
            </button>

            {/* Language Dropdown */}
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white text-black rounded-lg shadow-lg z-20">
                <button
                  onClick={() => changeLanguage('EN')}
                  className="block w-full text-left text-gray-800 px-4 py-2 hover:bg-gray-200"
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('KR')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  KR
                </button>
              </div>
            )}
          </div>

          {/* Profile Icon and Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-2 text-gray-800" title='menu'>
              <FaUserCircle size={24} />
              <IoIosArrowDown />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-20">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</Link>
                <hr className="my-1" />
                <button
                  onClick={() => console.log('Log Out')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Icon for small screens (moved to the right) */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} title="menu" className='text-gray-800'>
            <FaBars size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
