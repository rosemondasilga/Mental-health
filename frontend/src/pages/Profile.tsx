// src/pages/Profile.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaEdit, FaEnvelope, FaHistory, FaListAlt } from 'react-icons/fa'; // Icons from react-icons

const Profile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [loginHistory] = useState([
    { date: '2023-10-01', location: 'New York, USA', device: 'Chrome on Windows' },
    { date: '2023-09-15', location: 'San Francisco, USA', device: 'Safari on iPhone' },
    { date: '2023-08-25', location: 'London, UK', device: 'Firefox on Mac' },
  ]);
  const [activities] = useState([
    { date: '2023-10-02', description: 'Completed mental wellness assessment.' },
    { date: '2023-09-20', description: 'Viewed article on stress management.' },
    { date: '2023-09-01', description: 'Joined community support group.' },
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-y-auto">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Profile Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-8">
            <h1 className="text-2xl font-semibold">Profile</h1>

            {/* Profile Picture */}
            <section className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={profileImage || 'https://img.freepik.com/premium-photo/high-quality-digital-image-wallpaper_783884-180002.jpg?w=740'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <label
                  htmlFor="upload"
                  className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer flex items-center"
                >
                  <FaEdit />
                </label>
                <input
                aria-label='form'
                  type="file"
                  id="upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <p className="text-gray-600 text-sm">Change Profile Picture</p>
            </section>

            {/* Account Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaUserCircle /> Account Information
              </h2>
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-gray-600" />
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <p className="text-gray-600">John Doe</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gray-600" />
                <div>
                  <label className="block text-gray-700">Email</label>
                  <p className="text-gray-600">johndoe@example.com</p>
                </div>
              </div>
            </section>

            {/* Login History */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaHistory /> Login History
              </h2>
              <ul className="space-y-2">
                {loginHistory.map((entry, index) => (
                  <li key={index} className="p-2 border rounded-lg bg-gray-50 flex items-center gap-4">
                    <FaHistory className="text-gray-500" />
                    <div>
                      <p className="text-gray-700 font-semibold">{entry.date}</p>
                      <p className="text-gray-600 text-sm">
                        {entry.location} - {entry.device}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Recent Activities */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaListAlt /> Recent Activities
              </h2>
              <ul className="space-y-2">
                {activities.map((activity, index) => (
                  <li key={index} className="p-2 border rounded-lg bg-gray-50 flex items-center gap-4">
                    <FaListAlt className="text-gray-500" />
                    <div>
                      <p className="text-gray-700 font-semibold">{activity.date}</p>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
