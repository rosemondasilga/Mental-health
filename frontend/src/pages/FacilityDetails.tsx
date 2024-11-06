// src/pages/FacilityDetails.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const FacilityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock facility data based on id
  const facility = {
    id: '1',
    name: 'New York Mental Health Center',
    address: '123 Wellness St, New York, NY',
    description: 'New York Mental Health Center provides comprehensive mental health services, including therapy, counseling, and psychiatric care.',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking details:', formData);
    alert(`Thank you, ${formData.name}. Your appointment request has been submitted for ${facility.name}.`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold">{facility.name}</h1>
        <p className="text-gray-500 mt-2">{facility.address}</p>
        <p className="text-gray-700 mt-4">{facility.description}</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-gray-700">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Any specific concerns or requests"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacilityDetails;
