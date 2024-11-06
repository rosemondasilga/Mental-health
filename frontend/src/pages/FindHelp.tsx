// src/pages/FindHelp.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import FacilityCard from '../components/FacilityCard';

const FindHelp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data for facilities
  const facilities = [
    {
      id: '1',
      name: 'Sun city therapy Kigali',
      address: '123 Wellness St, Kigali, RW',
      phone: '555-123-4567',
      description: 'Provides comprehensive mental health services for all ages.',
      category: 'Mental Health',
    },
    {
      id: '2',
      name: 'King Faisal Therapy Center',
      address: '456 Health Ave,  Kigali, RW',
      phone: '555-987-6543',
      description: 'Offers counseling and mental health support.',
      category: 'Counseling',
    },
  ];

  const emergencyContacts = [
    { location: 'New York', contact: '911 or 555-111-2222' },
    { location: 'San Francisco', contact: '911 or 555-333-4444' },
  ];

  // Filtered facilities based on search and category
  const filteredFacilities = facilities.filter(
    (facility) =>
      (selectedCategory === '' || facility.category === selectedCategory) &&
      facility.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100 overflow-y-auto inter">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-6">
          <SearchBar onSearch={setSearchTerm} onCategoryChange={setSelectedCategory} />

          <section className="mt-8">
            <div>
            <h2 className="text-2xl font-semibold text-gray-800">Find a Mental Health Facility</h2>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {filteredFacilities.map((facility) => (
                <FacilityCard
                  key={facility.id}
                  id={facility.id}
                  name={facility.name}
                  address={facility.address}
                  phone={facility.phone}
                  description={facility.description}
                />
              ))}
            </div>
          </section>

          {/* Emergency Contacts Section */}
          <section className="mt-8 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Emergency Contacts</h3>
            <ul className="mt-4 space-y-4">
              {emergencyContacts.map((contact, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold">{contact.location}:</span> {contact.contact}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default FindHelp;
