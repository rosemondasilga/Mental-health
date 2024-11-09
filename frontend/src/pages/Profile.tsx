// src/pages/Profile.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaEnvelope, FaHistory } from 'react-icons/fa';
import { auth } from '../firebase/firebase'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';

const Profile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // State to hold user info from Firebase
  const [user, setUser] = useState<{ displayName: string | null, email: string | null } | null>(null);
  const [loginHistory] = useState([
    { date: '2023-10-01', location: 'Bumbogo, Kigali', device: 'Chrome on Windows' },
    { date: '2023-09-15', location: 'Kibagabaga, Kigali', device: 'Safari on iPhone' },
    { date: '2023-08-25', location: 'Zindiro, Kigali', device: 'Firefox on Mac' },
  ]); // Assuming login history is not directly available through Firebase Authentication

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          displayName: currentUser.displayName,
          email: currentUser.email,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

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

            {/* Account Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaUserCircle /> Account Information
              </h2>
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-gray-600" />
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <p className="text-gray-600">{user?.displayName || 'John Doe'}</p> {/* Display Name */}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gray-600" />
                <div>
                  <label className="block text-gray-700">Email</label>
                  <p className="text-gray-600">{user?.email || 'johndoe@example.com'}</p> {/* Email */}
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
