// src/pages/EventDetails.tsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaShareAlt, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";

const EventDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [eventData, setEventData] = useState<any>(null);
    const [reviews, setReviews] = useState([
        { id: 1, author: 'Jane Doe', rating: 4, text: 'Very informative and engaging event!' },
        { id: 2, author: 'Alex Smith', rating: 5, text: 'Loved the speakers and the venue!' },
    ]);
    const [userReview, setUserReview] = useState('');
    const [userRating, setUserRating] = useState(0);

    // Mock event data for demonstration
    const events = [
        {
            id: '1',
            image: 'https://img.freepik.com/free-photo/business-conference_1098-3478.jpg?w=740',
            title: 'Mental Health Workshop',
            organizer: 'Health Inc.',
            date: 'Nov 12, 2024',
            location: 'ALU, RW',
            description: 'Join us for a workshop focused on mental health awareness and well-being.',
            content: 'This event will feature mental health professionals and interactive sessions on managing stress and mental well-being.',
            estimatedDuration: '2 hours',
            rating: 4.6,
        },
        {
            id: '2',
            image: 'https://img.freepik.com/free-photo/public-speaker-giving-talk-business-meeting-audience-conference-hall_342744-34.jpg',
            title: 'Stress Management Seminar',
            organizer: 'Wellness Today',
            date: 'Dec 5, 2024',
            location: 'Kigali Convention Center, KCC',
            description: 'Learn effective stress management techniques in this insightful seminar.',
            content: 'The seminar will cover mindfulness practices, stress-relief strategies, and include Q&A with experts.',
            estimatedDuration: '3 hours',
            rating: 4.8,
        },
    ];

    useEffect(() => {
        const foundEvent = events.find(event => event.id === id);
        setEventData(foundEvent);
    }, [id]);

    if (!eventData) {
        return <p>Loading...</p>;
    }

    // Function to render star ratings
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) =>
            i < rating ? <AiFillStar key={i} className="text-yellow-500" /> : <AiOutlineStar key={i} className="text-gray-300" />
        );
    };

    // Function to handle user review submission
    const handleReviewSubmit = () => {
        const newReview = {
            id: reviews.length + 1,
            author: 'You',
            rating: userRating,
            text: userReview,
        };
        setReviews(prev => [...prev, newReview]);
        setUserReview('');
        setUserRating(0);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <Link to='/content' className='border px-6 py-2 flex items-center gap-2 font-semibold text-gray-600 rounded-md'>
                <IoMdArrowBack />
                Go back
            </Link>

            <div className="flex flex-col lg:flex-row max-w-8xl px-6 md:px-0 mx-auto md:ml-4 mt-4 gap-6">
                {/* Main Event Content */}
                <div className="flex-1 bg-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-semibold">{eventData.title}</h1>
                        <button title="Share" className="text-gray-500 hover:text-gray-700">
                            <FaShareAlt size={20} />
                        </button>
                    </div>
                    <p className="text-gray-600 mb-2 flex items-center gap-2">
                        <FaUserCircle /> {eventData.organizer} • <FaMapMarkerAlt /> {eventData.location} • <FaRegClock /> {eventData.estimatedDuration}
                    </p>
                    
                    <img src={eventData.image} alt={eventData.title} className="w-full h-64 object-cover rounded-lg mb-4" />

                    <div className="flex items-center mb-4">
                        <span className="flex">{renderStars(Math.round(eventData.rating))}</span>
                        <span className="ml-2 text-gray-600">({eventData.rating.toFixed(1)} / 5)</span>
                    </div>

                    {/* Event Content */}
                    <div className="text-gray-700">
                        <p>{eventData.content}</p>
                    </div>
                    <button className="bg-[#002266] text-white rounded px-4 py-2 mt-4" onClick={handleReviewSubmit}>
                        Register
                    </button>
                </div>

                {/* Sidebar */}
                <aside className="lg:w-1/3 bg-white shadow-md rounded-lg p-4 h-full">
                    <h3 className="text-lg font-semibold mb-4">Related Events</h3>
                    <ul className="space-y-4">
                        {events.filter(event => event.id !== id).map(event => (
                            <li key={event.id} className="border-b pb-2 border px-6 py-2 rounded-md cursor-pointer shadow-lg">
                                <h4 className="text-lg font-medium">{event.title}</h4>
                                <p className="text-sm text-gray-500">{event.organizer} • {event.date}</p>
                                <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>

            {/* Reviews Section */}
            <div className="max-w-8xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
                <ul className="space-y-4">
                    {reviews.map(review => (
                        <li key={review.id} className="border-b pb-4">
                            <p className="font-semibold">{review.author}</p>
                            <div className="flex items-center mb-1">{renderStars(review.rating)}</div>
                            <p className="text-gray-700">{review.text}</p>
                        </li>
                    ))}
                </ul>

                {/* User Rating and Review Input */}
                <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">Add Your Review</h4>
                    <div className="flex items-center mb-2">
                        <input
                            type="number"
                            min="1"
                            max="5"
                            value={userRating}
                            onChange={(e) => setUserRating(Number(e.target.value))}
                            placeholder="Rating (1-5)"
                            className="border rounded px-2 py-1 mr-2 outline-none"
                        />
                        <textarea
                            value={userReview}
                            onChange={(e) => setUserReview(e.target.value)}
                            placeholder="Your review..."
                            className="border rounded p-2 w-full outline-none"
                            rows={3}
                        />
                    </div>
                    <button className="bg-[#002266] text-white rounded px-4 py-2" onClick={handleReviewSubmit}>
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
