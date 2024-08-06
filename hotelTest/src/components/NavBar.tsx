import React, { useState } from 'react';
import LoginPopup from './LoginPopup'; // Import the LoginPopup component

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <nav className="bg-white shadow p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
      <img src="similater long logo.png" alt="Company Logo" className="h-10 mr-2" />
       
        <div className="hidden md:flex space-x-8">
          <a href="/locations" className="text-gray-800 hover:text-gray-600 hover:bg-gray-200 p-2 rounded">Locations</a>
          <a href="/standard" className="text-gray-800 hover:text-gray-600 hover:bg-gray-200 p-2 rounded">Standard</a>
          <a href="/about" className="text-gray-800 hover:text-gray-600 hover:bg-gray-200 p-2 rounded">About</a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600 hover:bg-gray-200 p-2 rounded">Contact</a>
          <button
            onClick={openLoginPopup}
            className="text-gray-800 hover:text-gray-600 hover:bg-gray-200 p-2 rounded"
          >
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white bg-black p-2 rounded-md focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-white shadow-lg p-4">
          <a href="/locations" className="block text-gray-800 py-2 hover:text-gray-600 hover:bg-gray-200 p-2 rounded">Locations</a>
          <a href="/standard" className="block text-gray-800 py-2 hover:text-gray-600 hover:bg-gray-200 p-2 rounded">Standard</a>
          <a href="/about" className="block text-gray-800 py-2 hover:text-gray-600 hover:bg-gray-200 p-2 rounded">About</a>
          <a href="/contact" className="block text-gray-800 py-2 hover:text-gray-600 hover:bg-gray-200 p-2 rounded">Contact</a>
          <button
            onClick={openLoginPopup}
            className="block text-gray-800 py-2 hover:text-gray-600 hover:bg-gray-200 p-2 rounded w-full text-left"
          >
            Login
          </button>
        </div>
      )}

      {/* Login Popup */}
      {isLoginPopupOpen && (
        <LoginPopup onClose={closeLoginPopup} />
      )}
    </nav>
  );
};

export default Navbar;
