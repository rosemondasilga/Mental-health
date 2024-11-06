import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FcGoogle } from 'react-icons/fc'; // Google icon from react-icons

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<any>({}); // Store validation errors

  const validateForm = () => {
    const newErrors: any = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Simple email regex for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    // If no errors, form is valid
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', { name, email, password });
      // You can proceed with form submission logic here (e.g., send data to backend)
    }
  };

  return (
    <div className="">
      <div className="top-0 sticky">
        <Header />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-full max-w-xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">Sign Up</h2>
          <p className="text-gray-400 mb-4 text-center">
            Create a new account and join our community
          </p>
          <button
            type="button"
            className="flex items-center justify-center px-4 py-3 bg-[#fff] text-[#002266] border gap-2 rounded-full font-medium hover:bg-[#002266] hover:text-white mx-auto transition mb-4"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>
          <p className="text-sm font-medium text-center m-4 text-gray-400">Or</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-[#002266]"
                placeholder="Enter your name"
               
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-[#002266]"
                placeholder="example@gmail.com"
              
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-[#002266]"
                placeholder="• • • • • • • • • "
               
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-[#002266]"
                placeholder="• • • • • • • • • "
               
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-[#002266] text-white rounded-full font-medium hover:bg-blue-900 transition"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#9835ff] font-bold hover:underline">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
