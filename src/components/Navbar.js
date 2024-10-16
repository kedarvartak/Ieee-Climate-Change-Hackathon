// src/components/Navbar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChatBubbleLeftIcon, 
  MapPinIcon, 
  PuzzlePieceIcon, 
  DocumentTextIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on Esc key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      {/* Import Allison and Caramel fonts via a style tag */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Allison&family=Caramel&display=swap');
          
          .font-allison {
            font-family: 'Allison', cursive;
          }
          .font-caramel {
            font-family: 'Caramel', cursive;
            font-weight: 400;
            font-style: normal;
          }
          .font-orbitron {
            font-family: 'Orbitron', sans-serif; /* Ensure this font is imported if used */
          }
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent font-caramel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Website Name "Cassy" */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-6xl font-caramel">
                Cassy
              </Link>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-white mt-5 hover:text-gray-300 focus:outline-none"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isOpen}
                aria-controls="navbar-menu"
              >
                {isOpen ? (
                  <XMarkIcon className="h-8 w-8" /> // X icon when menu is open
                ) : (
                  <Bars3Icon className="h-8 w-8" /> // Hamburger icon when menu is closed
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Slide-down Menu Panel */}
        <div
          ref={menuRef}
          id="navbar-menu"
          className={`fixed top-20 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-md border-t border-white p-6 rounded-b-lg shadow-lg transform transition-all duration-300 ease-in-out z-50 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-6">
            {/* Navigation Links with Icons */}
            <Link
              to="/forum"
              className="flex items-center text-white text-2xl font-orbitron hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              <ChatBubbleLeftIcon className="h-6 w-6 mr-3" />
              Forum
            </Link>
            <Link
              to="/garbage"
              className="flex items-center text-white text-2xl font-orbitron hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              <MapPinIcon className="h-6 w-6 mr-3" />
              Garbage Disposal Map
            </Link>
            <Link
              to="/game"
              className="flex items-center text-white text-2xl font-orbitron hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              <PuzzlePieceIcon className="h-6 w-6 mr-3" />
              Climate Game
            </Link>
            <Link
              to="/doomsday"
              className="flex items-center text-white text-2xl font-orbitron hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              <DocumentTextIcon className="h-6 w-6 mr-3" />
              Doomsday Clock
            </Link>
            <Link
              to="/blogpage"
              className="flex items-center text-white text-2xl font-orbitron hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              <UserCircleIcon className="h-6 w-6 mr-3" />
              Blogs
            </Link>
            <Link
              to="/profile"
              className="flex items-center text-white text-2xl font-orbitron hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              <UserCircleIcon className="h-6 w-6 mr-3" />
              Profile
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
        )}
      </nav>
    </>
  );
}
