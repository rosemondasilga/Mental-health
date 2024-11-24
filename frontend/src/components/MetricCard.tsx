// src/components/MetricCard.tsx
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  onClick: () => void; // Add onClick prop type
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl duration-150 transition-shadow flex items-center space-x-4">
      <div className="text-[#002266]">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{value}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default MetricCard;
