import React, { useState } from 'react';
import { doPasswordReset } from '../firebase/auth'; // Import the password reset function

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Track loading state

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsSubmitting(true);
    
    try {
      await doPasswordReset(email);
      setMessage('Password reset email sent!(if you have an account with us) Please check your inbox.');
    } catch (err: any) {
      setError(err.message || 'An error occurred while sending the password reset email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Forgot Password</h2>
        <p className="text-gray-400 mb-6 text-center">
          Enter your email to receive a password reset link.
        </p>
        <form onSubmit={handlePasswordReset} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 focus:outline-none focus:border-[#002266]"
              placeholder="example@gmail.com"
              required
            />
          </div>
          {message && <p className="text-green-500 text-sm text-center">{message}</p>}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-[#002266] text-white rounded-full font-medium hover:bg-blue-900 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Email'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
