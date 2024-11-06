// src/pages/Settings.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Settings: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [formData, setFormData] = useState({
    username: 'John Doe',
    email: 'johndoe@example.com',
    notifications: true,
    twoFactorAuth: false,
    textSize: 'medium',
    colorTheme: 'light',
    reminders: true,
  });

  const handleToggle = (field: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: !prevData[field],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-y-auto">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Settings Content */}
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-semibold">Settings</h1>

          {/* Account Management */}
          <section className="mt-8 bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold">Account Management</h2>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </section>

          {/* Privacy & Security */}
          <section className="mt-8 bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold">Privacy & Security</h2>
            <div className="flex items-center gap-4">
              <label className="text-gray-700">Enable Two-Factor Authentication</label>
              <input
                type="checkbox"
                checked={formData.twoFactorAuth}
                onChange={() => handleToggle('twoFactorAuth')}
                className="h-5 w-5 text-blue-600"
              />
            </div>
            <button className="text-red-500 mt-4">Delete Account</button>
          </section>

          {/* Accessibility Options */}
          <section className="mt-8 bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold">Accessibility Options</h2>
            <div className="flex items-center gap-4">
              <label className="text-gray-700">Color Theme</label>
              <select
                name="colorTheme"
                value={formData.colorTheme}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="highContrast">High Contrast</option>
              </select>
            </div>
          </section>

          {/* Notifications & Reminders */}
          <section className="mt-8 bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold">Notification & Reminders</h2>
            <div className="flex items-center gap-4">
              <label className="text-gray-700">Enable Reminders</label>
              <input
                type="checkbox"
                checked={formData.reminders}
                onChange={() => handleToggle('reminders')}
                className="h-5 w-5 text-blue-600"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Settings;
