import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { auth } from '../firebase/firebase'; // Ensure firebase auth is imported
import { updateProfile, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

interface FormData {
  username: string;
  email: string;
  newPassword: string;
  notifications: boolean;
  twoFactorAuth: boolean;
  textSize: string;
  colorTheme: string;
  reminders: boolean;
}

const Settings: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Set initial state with placeholders
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    newPassword: '',
    notifications: true,
    twoFactorAuth: false,
    textSize: 'medium',
    colorTheme: 'light',
    reminders: true,
  });

  // Fetch user data on component mount
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        username: user.displayName || 'User', // Default if no display name is set
        email: user.email || '',
      }));
    }
  }, []);

  const handleToggle = (field: keyof FormData) => {
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

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        // Reauthenticate user before updating email or password
        if (formData.newPassword) {
          const credential = EmailAuthProvider.credential(user.email!, formData.newPassword);
          await reauthenticateWithCredential(user, credential);
        }

        // Update Username
        if (formData.username !== user.displayName) {
          await updateProfile(user, { displayName: formData.username });
        }

        // Update Email (if changed)
        if (formData.email !== user.email) {
          await updateEmail(user, formData.email);
          // Send verification email after updating email
          await user.reload(); // Reload to ensure the email is updated before sending verification
         
        }

        // Update Password (if new password is provided)
        if (formData.newPassword) {
          await updatePassword(user, formData.newPassword);
        }

        alert('Settings updated successfully!');
      } catch (error) {
        console.error('Error updating settings:', error);
        alert('Error updating settings. Please try again.');
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-y-auto">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-semibold">Settings</h1>
          
          {/* Account Management */}
          <section className="mt-8 bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold">Account Management</h2>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                title="uname"
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
                title="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                title="newPassword"
                type="password"
                name="newPassword"
                value={formData.newPassword}
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
                title="de"
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
                title="color"
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
                title="reminder"
                type="checkbox"
                checked={formData.reminders}
                onChange={() => handleToggle('reminders')}
                className="h-5 w-5 text-blue-600"
              />
            </div>
          </section>

          {/* Save Button */}
          <section className="mt-8">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Settings;
