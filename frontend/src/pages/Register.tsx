/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection after sign up
import Header from '../components/Header';
import { FcGoogle } from 'react-icons/fc'; // Google icon from react-icons
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle, doSendEmailVerification } from '../firebase/auth.js'; // Firebase functions
import VerificationModal from '../components/VerificationModal.js';
import { updateProfile } from 'firebase/auth';


const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<any>({}); // Store validation errors
  const [isRegistering, setIsRegistering] = useState(false); // For tracking the loading state during registration
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate(); // For redirecting after successful sign-up

  // Form validation logic
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
  
    if (Object.keys(formErrors).length === 0 && !isRegistering) {
      setIsRegistering(true);
      try {
        const userCredential = await doCreateUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        // Update the user's display name
        await updateProfile(user, { displayName: name });
        await doSendEmailVerification();
        setIsModalOpen(true); // Open modal on success
      } catch (error: any) {
        if (error.code === 'auth/invalid-email') setErrors({ firebase: 'Invalid email address.' });
        else if (error.code === 'auth/email-already-in-use') setErrors({ firebase: 'Email already in use.' });
        else setErrors({ firebase: 'An error occurred. Please try again later.' });
      } finally {
        setIsRegistering(false);
      }
    }
  };
  // Google sign-in handler
  const onGoogleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doSignInWithGoogle();
        // Navigate to dashboard after Google sign-in
        navigate('/dashboard');
      } catch (error: any) {
        setErrors({ firebase: error.message });
      } finally {
        setIsRegistering(false);
      }
    }
  };

  return (
    <div>
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
            onClick={onGoogleSignIn}
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
            {errors.firebase && (
              <p className="text-red-500 text-sm text-center bg-blue-200 p-2 rounded">{errors.firebase}</p>
            )}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-[#002266] text-white rounded-full font-medium hover:bg-blue-900 transition"
                disabled={isRegistering}
              >
                {isRegistering ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
            <div className="text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#9835ff] font-bold hover:underline">
                Sign In
              </Link>
            </div>
          </form>
          <VerificationModal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); navigate('/login'); }} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
