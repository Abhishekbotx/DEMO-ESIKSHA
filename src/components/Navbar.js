import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../ChatGPT Image Sep 29, 2025, 04_30_15 PM.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed z-50 bg-green-500 top-0 opacity-95 left-0 right-0 flex flex-col md:flex-row justify-between items-center w-full px-4 py-3 text-black"
      style={{ 
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(8px)'  
      }}
    >
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/" className="font-bold text-xl text-black whitespace-nowrap">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </Link>
        <button
          className="inline-flex md:hidden text-black hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:items-center w-full mt-4 md:mt-0 text-black space-x-0 md:space-x-14`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:space-x-14 mx-auto font-bold lg:pl-4">
          <Link to="/" className="hover:text-gray-400 py-2 md:py-0">
            Home
          </Link>
          <Link to="/courses" className="hover:text-gray-400 py-2 md:py-0">
            Courses
          </Link>
          <Link to="/resources" className="hover:text-gray-400 py-2 md:py-0">
            Resources
          </Link>
          <Link to="/guidance" className="hover:text-gray-400 py-2 md:py-0">
            Teacher/Parent
          </Link>
          <Link to="/community" className="hover:text-gray-400 py-2 md:py-0">
            Community
          </Link>
          <Link to="/aboutUs" className="hover:text-gray-400 py-2 md:py-0">
            About
          </Link>
          <Link to="/contactUs" className="hover:text-gray-400 py-2 md:py-0">
            Contact
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 font-bold">
          <Link
            to="/login"
            className="text-black hover:bg-green-600 px-4 py-2 rounded mb-2 md:mb-0"
          >
            Login
          </Link>
          {/* <Link
            to="/employee-signup"
            className="text-black hover:bg-green-600 px-4 py-2 rounded"
          >
            Sign Up
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
