// src/pages/Dashboard.tsx
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ResourcesSection from '../components/ResourceSection';
import MetricCard from '../components/MetricCard';
import QuickLinks from '../components/QuickLinks';
import { FaUsers, FaClipboardList, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa'; // Icons for metric cards
import AssessmentAlert from '../components/AssessmentAlert';
import Greeting from '../components/Greetings';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null); // Create a ref for the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false); // Close the sidebar if click happens outside
      }
    };

    // Add event listener
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex h-screen bg-gray-100 overflow-y-auto">
      {/* Sidebar */}
      <div ref={sidebarRef}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
        <div>
            <Greeting />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <MetricCard 
              title="Active Users" 
              value="1,245" 
              icon={<FaUsers size={40} />} 
            />
            <MetricCard 
              title="Sessions Completed" 
              value="345" 
              icon={<FaCheckCircle size={40} />} 
            />
            <MetricCard 
              title="Resources Available" 
              value="32" 
              icon={<FaClipboardList size={40} />} 
            />
            <MetricCard 
              title="Upcoming Appointments" 
              value="12" 
              icon={<FaCalendarAlt size={40} />} 
            />
          </div>

          <QuickLinks />
            <div>
            <AssessmentAlert /> 
            </div>
          <ResourcesSection />
         
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
