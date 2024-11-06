// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using react-router for navigation
import { FaBars, FaArrowRight } from 'react-icons/fa'; // Import icons
import { Drawer } from 'antd'; // Import antd Drawer and Button
import 'antd/dist/reset.css'; // Ant Design CSS reset if not already imported
import Logo from '../../public/mlogo.svg'; // Correct path for logo
import { RiMenu3Fill } from "react-icons/ri";


const Header: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false); // Drawer state

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <header className="bg-[#F9F9FF] py-4 ">
      <nav className="container mx-auto flex justify-between items-center w-full md:w-4/5 px-4 md:px-0">
        {/* Logo Section */}
        <div className="w-28 ">
          <Link to="/" className=""> 
            <img src={Logo} alt="logo" className="w-full" /> {/* Logo */}
          </Link>
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden flex items-center">
        
          <button type="button" title='text' onClick={showDrawer} className="text-black ">
          <RiMenu3Fill size={24} />
          </button>
        </div>

        {/* Navigation Links (visible on medium and larger screens) */}
        <ul className="hidden md:flex space-x-6 text-black">
          <li className='hover:border-b-2 border-blue-700 border-spacing-2'><Link to="/">Home</Link></li>
          <li className='hover:border-b-2 border-blue-700 border-spacing-2'><Link to="/find-help">Find Help</Link></li>
          <li className='hover:border-b-2 border-blue-700 border-spacing-2'><Link to="/resources">Explore Resources</Link></li>
          <li className='hover:border-b-2 border-blue-700 border-spacing-2'><Link to="/forum">Community</Link></li>
         
        </ul>

        {/* Get Started Button */}
        <Link
          to="/login"
          className="bg-[#002366] hidden  md:flex text-white px-4 py-2 rounded-full font-medium  items-center space-x-2 hover:bg-blue-900 transition"
        >
          <span>Get Started</span>
          <FaArrowRight className="ml-2" /> {/* Arrow icon */}
        </Link>
      </nav>

      {/* Drawer for mobile navigation */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
        className="text-white bg-[#9835ff]" // Drawer styling
      >
        <ul className="space-y-4 inter text-black">
          <li><Link to="/" onClick={closeDrawer}>Home</Link></li>
          <li><Link to="/find-help" onClick={closeDrawer}>Find Help</Link></li>
          <li><Link to="/resources" onClick={closeDrawer}>Explore Resources</Link></li>
          <li><Link to="/forum" onClick={closeDrawer}>Community Forum</Link></li>
         
        </ul>
        <button className='text-white mt-8 inter bg-[#002266] py-2 px-4 rounded-full flex items-center'>Get Started
        <FaArrowRight className="ml-2" /> {/* Arrow icon */}
        </button>
      
      </Drawer>
    </header>
  );
};

export default Header;
