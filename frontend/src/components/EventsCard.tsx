// src/components/EventCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ id, image, title, date, location, description }) => {
  return (
    <Link to={`/event/${id}`} className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-sm text-gray-500">{date} • {location}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </Link>
  );
};

export default EventCard;
