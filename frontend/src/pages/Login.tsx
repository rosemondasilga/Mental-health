import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Header from '../components/Header';
import { FcGoogle } from "react-icons/fc";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth.js';
import { useAuth } from '../context/authContext/index.js';

// Declare the module with an implicit 'any' type


const Login: React.FC = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Simple email regex for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0 && !isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        // Redirect to the dashboard on successful sign-in
        navigate('/dashboard');
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        // Redirect to the dashboard on successful Google sign-in
        navigate('/dashboard');
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setIsSigningIn(false);
      }
    }
    if (userLoggedIn) {
      navigate('/dashboard');
      return null; // Optionally return null to avoid rendering the login form
    }
  };

  return (
    <div>
      <div className='top-0 sticky'>
        <Header />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-full max-w-xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">Sign In</h2>
          <p className='text-gray-400 mb-4 text-center'>Welcome back, sign into your account</p>
          {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
          <button
            type="button"
            className="flex items-center justify-center px-4 py-3 bg-[#fff] text-[#002266] border gap-2 rounded-full font-medium hover:bg-[#002266] hover:text-white mx-auto transition mb-4"
            onClick={onGoogleSignIn}
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>
          <p className='text-sm font-medium text-center m-4 text-gray-400'>Or</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-[#002266]"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <Link to='/forgot-password' className='text-right text-sm text-[#002266] font-semibold mt-4 flex justify-end'>Forgot Password?</Link>
            <button
              type="submit"
              className="w-full py-3 bg-[#002266] text-white font-semibold rounded-full hover:bg-[#001b4f] transition"
              disabled={isSigningIn}
            >
              {isSigningIn ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Don't have an account? <Link to="/signup" className="text-[#002266] font-medium">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
