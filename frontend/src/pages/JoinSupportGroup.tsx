// src/pages/JoinSupportGroup.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaTelegram, FaDiscord } from 'react-icons/fa';

const JoinSupportGroup: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  const supportGroups = [
    { id: 1, title: 'Anxiety Support Group', description: 'Connect with others managing anxiety.' },
    { id: 2, title: 'Depression Support Group', description: 'Share experiences and find support for depression.' },
    { id: 3, title: 'Mindfulness Practice Group', description: 'Join a group focused on mindfulness practices.' },
  ];

  const platforms = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      link: 'https://chat.whatsapp.com/example',
      icon: <FaWhatsapp size={20} className="mr-2" />,
      color: '#25D366',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      link: 'https://t.me/example',
      icon: <FaTelegram size={20} className="mr-2" />,
      color: '#0088cc',
    },
    {
      id: 'discord',
      name: 'Discord',
      link: 'https://discord.com/invite/example',
      icon: <FaDiscord size={20} className="mr-2" />,
      color: '#5865F2',
    },
  ];

  const handleJoinClick = (groupId: number) => {
    setSelectedGroup(groupId === selectedGroup ? null : groupId);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="text-blue-500 underline hover:text-blue-700 mb-4"
        >
          &larr; Back
        </button>

        {/* Page Title and Description */}
        <h1 className="text-2xl font-semibold text-gray-800">Join a Support Group</h1>
        <p className="text-gray-600 mb-6">
          Find and join support groups on various platforms. Whether it’s WhatsApp, Telegram, or Discord, connect with a community that understands and supports your journey.
        </p>

        {/* Support Groups List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportGroups.map((group) => (
            <div key={group.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800">{group.title}</h2>
              <p className="text-gray-600 mt-2">{group.description}</p>
              
              {/* Join Group Button */}
              <button
                onClick={() => handleJoinClick(group.id)}
                className="mt-4 bg-[#002266] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition"
              >
                Join Group
              </button>

              {/* Platform Options */}
              {selectedGroup === group.id && (
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700 font-semibold">Join on:</p>
                  {platforms.map((platform) => (
                    <a
                      key={platform.id}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                      style={{ backgroundColor: platform.color }}
                    >
                      {platform.icon} {platform.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinSupportGroup;
