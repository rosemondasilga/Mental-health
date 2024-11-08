import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';

const Greeting: React.FC = () => {
  const { currentUser } = useAuth(); // Assuming user contains the logged-in user details
  const [greeting, setGreeting] = useState<string>('Hello');

  // Function to get the appropriate greeting based on local time
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  // Effect to set the greeting based on local time
  useEffect(() => {
    setGreeting(getGreeting());

    // Set a timeout to change greeting to "Hello" after 10 seconds
    const timeout = setTimeout(() => {
      setGreeting('Hello');
    }, 10000); // Change to "Hello" after 10 seconds

    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-gray-800">
        {greeting}! <span className='text-[#002266] '>{currentUser.displayName ? currentUser.displayName : currentUser.email }</span>
      </h1>
      <p className="text-gray-600">How are you feeling today?</p>
      <button className='mt-2 bg-[#002266] text-white p-2 rounded shadow-md'>Talk with someone?</button>
    </div>
  );
};

export default Greeting;
