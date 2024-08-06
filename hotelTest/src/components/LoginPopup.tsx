import React, { useState } from 'react';

interface LoginPopupProps {
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-md shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Sign In</h2>
        <h3 className="text-sm sm:text-lg text-gray-600 mb-6">Welcome back!</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm sm:text-base font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm sm:text-base font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.39A3.99 3.99 0 0016 11c0-2.21-1.79-4-4-4a3.99 3.99 0 00-1 .39m4 4.61A3.99 3.99 0 0016 13a3.99 3.99 0 00-.39-1m0-1a3.993 3.993 0 00-1-2.6M21 12c0 2.21-1.79 4-4 4a3.993 3.993 0 01-2-1A3.993 3.993 0 0113 16a3.993 3.993 0 01-1-2.6M4.22 4.22A8.002 8.002 0 0012 20a8.002 8.002 0 007.78-7.78M7 13c-1.6 0-3.09-.44-4.37-1.21M21.78 11.22A8.002 8.002 0 0012 4a8.002 8.002 0 00-7.78 7.78m2.43 2.43A3.99 3.99 0 007 13a3.993 3.993 0 001.6-.5m4.84 2.03a3.993 3.993 0 001.76 1.67M21.78 12.22a8.002 8.002 0 00-7.78-7.78" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 2c4.418 0 8-3.582 8-8s-3.582-8-8-8S4 5.582 4 10s3.582 8 8 8zm-1-11h2v6h-2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Login
            </button>
            <a href="/forgot-password" className="text-blue-500 hover:underline mt-2 sm:mt-0 sm:ml-4">Forgot Password?</a>
          </div>
        </form>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 text-gray-600 hover:text-gray-800 w-full text-center py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
