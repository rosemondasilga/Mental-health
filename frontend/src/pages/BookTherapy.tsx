// src/pages/BookTherapy.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookTherapy: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    therapyType: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      alert('Your therapy session has been successfully booked!');
    }, 1000);
  };

  const timeSlots = ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
  const therapyTypes = ["Individual Therapy", "Group Therapy", "Family Therapy", "Online Therapy"];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="text-blue-500 underline mb-4 hover:text-blue-700"
        >
          &larr; Back
        </button>
        
        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-800">Book a Therapy Session</h1>
        
        {/* How It Works */}
        <section className="space-y-2">
          <p className="text-gray-600">Fill in your details, select a date, time, and type of therapy. Once you submit the form, you'll receive a confirmation message and we will match you with the best doctors who will reach out to you via chat</p>
        
        Alternatively, you can {''}
        <a
  href="https://calendly.com/r-asilga-alustudent"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline"
>
  book a session directly through our Calendly page
</a>{''}
and receive email notifications Instantly.
        </section>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label htmlFor="date" className="block text-gray-700">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Time Slot Selection */}
          <div>
            <label className="block text-gray-700">Preferred Time</label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, time: slot }))}
                  className={`p-2 border rounded-lg text-center ${formData.time === slot ? 'bg-[#002266] text-white' : 'bg-gray-200'} hover:bg-blue-900 hover:text-white transition`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Therapy Type Selection */}
          <div>
            <label className="block text-gray-700">Type of Therapy</label>
            <select
            title='select'
              name="therapyType"
              value={formData.therapyType}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Type</option>
              {therapyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="notes" className="block text-gray-700">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              rows={3}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-[#002266] text-white py-2 rounded-lg hover:bg-blue-900 transition">
            Book Now
          </button>
        </form>

        {/* Confirmation Message */}
        {isSubmitted && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800">
            <h2 className="text-lg font-semibold">Booking Confirmed!</h2>
            <p>Thank you, {formData.name}. Your {formData.therapyType.toLowerCase()} session has been booked for {formData.date} at {formData.time}.</p>
            <p>We will send further details to {formData.email}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTherapy;
