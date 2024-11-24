import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaShareAlt, FaRegClock } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";
import { TbCalendarPlus } from "react-icons/tb";
import { RxSpeakerLoud } from "react-icons/rx";

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [blogData, setBlogData] = useState<any>(null);
    const [fontSize, setFontSize] = useState(16); // Font size adjustment
    const [reviews, setReviews] = useState([
        { id: 1, author: 'Jane Doe', rating: 4, text: 'Very informative and well-written!' },
        { id: 2, author: 'Alex Smith', rating: 5, text: 'Excellent tips for daily mental health!' },
    ]); // Sample reviews
    const [userReview, setUserReview] = useState('');
    const [userRating, setUserRating] = useState(0);

    // Mock data for example
    const blogs = [
        {
            id: '1',
            image: 'https://img.freepik.com/free-photo/stressed-young-adult-person-with-hypertension-feeling-sick-because-headache-unwell-ill-woman-suffering-from-painful-head-migraine-putting-pression-temples-with-fingers_482257-46363.jpg?t=st=1729935179~exp=1729938779~hmac=3846da663bc9edfd599e94d886e2a618c48b269c85f12d4f4ed767c85dc70ee0&w=360',
            title: 'Mental Health Tips',
            author: 'Rosemond Asilga',
            date: 'Oct 1, 2024',
            description: 'Detailed tips on mental health.',
            content: 'Full blog content goes here. This blog provides valuable insights and tips on maintaining mental health...',
            estimatedReadTime: '5 min',
            rating: 4.5,
        },
        {
            id: '2',
            image: 'https://img.freepik.com/premium-photo/confused-patient-psychology-session_622301-5296.jpg?w=740',
            title: 'Stress Management',
            author: 'John Doe',
            date: 'Nov 15, 2024',
            description: 'Ways to manage stress effectively.',
            content: 'How to Manage Stress and Protect Your Mental Health',
            estimatedReadTime: '7 min',
            rating: 4.8,
        },
    ];

    useEffect(() => {
        const foundBlog = blogs.find(blog => blog.id === id);
        setBlogData(foundBlog);
    }, [id]);

    if (!blogData) {
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
            author: 'You', // Change as needed, or use a state for author
            rating: userRating,
            text: userReview,
        };
        setReviews(prev => [...prev, newReview]);
        setUserReview('');
        setUserRating(0);
    };

    return (
        <div className="bg-gray-100 min-h-screen md:p-5">
                <Link to='/content' className='border px-6 py-2 flex items-center gap-2 font-semibold text-gray-600 rounded-md'>
                <IoMdArrowBack />
                        Go back
                </Link>

            <div className="flex flex-col lg:flex-row max-w-8xl px-6 md:px-0 mx-auto md:ml-4 mt-4 gap-6">
                {/* Main Blog Content */}
                <div className="flex-1 bg-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-semibold">{blogData.title}</h1>
                        <button title="Share" className="text-gray-500 hover:text-gray-700">
                            <FaShareAlt size={20} />
                        </button>
                    </div>
                    <p className="text-gray-600 mb-2 flex items-center gap-2"> <FaUserCircle /> {blogData.author} • <TbCalendarPlus /> {blogData.date} • <FaRegClock /> {blogData.estimatedReadTime} </p>
                 
                    <img src={blogData.image} alt={blogData.title} className="w-full h-64 object-cover rounded-lg mb-4" />

                    <div className="flex items-center mb-4">
                        <span className="flex">{renderStars(Math.round(blogData.rating))}</span>
                        <span className="ml-2 text-gray-600">({blogData.rating.toFixed(1)} / 5)</span>
                    </div>

                    {/* Blog Content */}
                    <div style={{ fontSize: `${fontSize}px` }}>
                        <p className="text-gray-700">{blogData.content}</p>
                    </div>

                    {/* Font Size Adjustment */}
                    <div className="flex items-center mt-6">
                        <button
                            className="text-gray-600 hover:text-gray-800 border py-1 rounded-lg px-4"
                            onClick={() => setFontSize(prev => Math.max(prev - 1, 12))}
                            title="Decrease font size"
                        >
                            A-
                        </button>
                        <button
                            className="ml-4 text-gray-600 hover:text-gray-800 border py-1 rounded-lg px-4"
                            onClick={() => setFontSize(prev => Math.min(prev + 1, 24))}
                            title="Increase font size"
                        >
                            A+
                        </button>
                    </div>

                    {/* Play Sound / Read Aloud Button */}
                    <button className="mt-4 bg-[#002266] text-white rounded px-4 py-2 flex items-center gap-2" onClick={() => {/* Add audio playback logic */}}>
                        Play Sound <RxSpeakerLoud />
                    </button>

                  
                </div>

                {/* Sidebar */}
                <aside className="lg:w-1/3 bg-white shadow-md rounded-lg p-4 h-full">
                    <h3 className="text-lg font-semibold mb-4">Related Blogs</h3>
                    <ul className="space-y-4">
                        {blogs.filter(blog => blog.id !== id).map(blog => (
                            <li key={blog.id} className="border-b pb-2 border  px-6 py-2 rounded-md cursor-pointer shadow-lg ">
                                <h4 className="text-lg font-medium">{blog.title}</h4>
                                <p className="text-sm text-gray-500">{blog.author} • {blog.date}</p>
                                <p className="text-gray-600 text-sm mt-1">{blog.description}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="max-w-6xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
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
                </aside>
            </div>

            {/* Reviews Section */}
        
        </div>
    );
};

export default BlogDetails;
