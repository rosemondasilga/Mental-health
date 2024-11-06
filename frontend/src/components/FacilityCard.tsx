// src/components/FacilityCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface FacilityCardProps {
  id: string;
  name: string;
  address: string;
  phone: string;
  description: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ id, name, address, phone, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <Link to={`/facility/${id}`}>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-gray-500 mt-1">{address}</p>
      </Link>
      <div className="mt-4 flex space-x-4">
        <a href={`tel:${phone}`} className="text-blue-500 font-semibold hover:underline">
          Call Now
        </a>
        <a
          href={`https://maps.google.com/?q=${address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold hover:underline"
        >
          View on Maps
        </a>
      </div>
    </div>
  );
};

export default FacilityCard;
