// src/pages/AccessResources.tsx
import React from 'react';

const AccessResources: React.FC = () => {
  const resources = [
    { id: 1, title: 'Stress Management', description: 'Learn strategies for managing stress effectively.' },
    { id: 2, title: 'Anxiety Relief Techniques', description: 'Find techniques to help manage anxiety and reduce symptoms.' },
    { id: 3, title: 'Mindfulness Meditation', description: 'Guided practices and articles to improve mindfulness.' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800">Mental Health Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800">{resource.title}</h2>
              <p className="text-gray-600 mt-2">{resource.description}</p>
              <button className="mt-4 bg-[#002266] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessResources;
