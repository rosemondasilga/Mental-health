// src/components/BlogCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  image: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, title, author, date, description }) => {
  return (
    <Link to={`/blog/${id}`} className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-sm text-gray-500">By {author} • {date}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </Link>
  );
};

export default BlogCard;
