// src/pages/Content.tsx
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import BlogCard from '../components/BlogCard';
import EventCard from '../components/EventsCard';

const Content: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Sample data with `id` for blogs and events
  const blogs = [
    { id: '1', image: 'https://img.freepik.com/free-photo/stressed-young-adult-person-with-hypertension-feeling-sick-because-headache-unwell-ill-woman-suffering-from-painful-head-migraine-putting-pression-temples-with-fingers_482257-46363.jpg?t=st=1729935179~exp=1729938779~hmac=3846da663bc9edfd599e94d886e2a618c48b269c85f12d4f4ed767c85dc70ee0&w=360', title: 'Mental Health Tips', author: 'Alice Johnson', date: 'Oct 1, 2023', description: 'Tips to maintain mental health.', category: 'Health' },
    { id: '2', image: 'https://img.freepik.com/premium-photo/confused-patient-psychology-session_622301-5296.jpg?w=740', title: 'Stress Management', author: 'John Doe', date: 'Sep 15, 2023', description: 'Ways to manage stress effectively.', category: 'Wellness' },
  ];

  const events = [
    { id: '1', image: 'https://img.freepik.com/free-photo/man-with-addiction-sharing-mental-health-issues-with-group-aa-meeting-talking-therapist-people-having-conversation-about-depression-rehabilitation-therapy-session_482257-27433.jpg?t=st=1729935491~exp=1729939091~hmac=5fae8aead3fdd1c897a7123481ee716152d53173307f7f3e416f0ae524615a1a&w=740', title: 'Mental Health Workshop', date: 'Nov 12, 2023', location: 'New York, NY', description: 'Workshop on mental health awareness.', category: 'Health' },
    { id: '2', image: 'https://img.freepik.com/free-photo/mental-health-care-sketch-diagram_53876-128059.jpg?t=st=1729935469~exp=1729939069~hmac=cb3a7185361e7c9410d175b2a08d5969b5a73dc5b1b45fea14fd6a98ea3b3e4a&w=740', title: 'Stress Management Seminar', date: 'Dec 5, 2023', location: 'San Francisco, CA', description: 'Seminar on stress management techniques.', category: 'Wellness' },
  ];

  // Filtering logic
  const filteredBlogs = blogs.filter(
    blog =>
      (selectedCategory === '' || blog.category === selectedCategory) &&
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEvents = events.filter(
    event =>
      (selectedCategory === '' || event.category === selectedCategory) &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Search Bar */}
          <SearchBar onSearch={setSearchTerm} onCategoryChange={setSelectedCategory} />

          {/* Blog Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {filteredBlogs.map(blog => (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  image={blog.image}
                  title={blog.title}
                  author={blog.author}
                  date={blog.date}
                  description={blog.description}
                />
              ))}
            </div>
          </section>

          {/* Event Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {filteredEvents.map(event => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  image={event.image}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Content;
