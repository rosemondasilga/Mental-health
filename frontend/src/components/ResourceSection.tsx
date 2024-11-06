// src/components/ResourcesSection.tsx
import React from 'react';

const ResourcesSection: React.FC = () => {
  const resources = [
    { 
      title: 'Understanding Anxiety', 
      description: 'Learn about anxiety and how to manage it.', 
      img: 'https://img.freepik.com/free-vector/mental-health-awareness-concept_23-2148531011.jpg?t=st=1729146623~exp=1729150223~hmac=44df27ef0541f0130a794ab89f85eb119cfc47f45bbecf27ae60f351a503fa04&w=740' // Placeholder image URL
    },
    { 
      title: 'Coping with Depression', 
      description: 'Resources and support for overcoming depression.', 
      img: 'https://img.freepik.com/premium-vector/promoting-mental-health-awareness-international-holiday-conceptual-image-wellbeing-self_1334819-26283.jpg?w=826' // Placeholder image URL
    },
    { 
      title: 'Mindfulness Practices', 
      description: 'Explore mindfulness techniques to improve mental health.', 
      img: 'https://img.freepik.com/premium-vector/therapy-psychology-support-coaching-tiny-man-pushing-arrow-stress-level-meter_213110-8081.jpg?w=740' // Placeholder image URL
    },
  ];

  return (
    <section className="bg-gray-100 mt-8">
        <h1 className='font-semibold mb-4 text-xl text-[#002266]'>Recommended Resources</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-4 rounded-lg hover:translate-y-[-5px] duration-150 cursor-pointer">
            <img 
              src={resource.img} 
              alt={resource.title} 
              className="w-full h-48 object-cover rounded-md" // Styling for the image
            />
            <h3 className="text-xl font-semibold mt-4">{resource.title}</h3>
            <p className="mt-2 text-gray-600">{resource.description}</p>
            <button className="mt-4 text-[#002266] hover:underline">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;
