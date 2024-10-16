// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo or Brand Name */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl md:text-[70px] font-caramel font-bold text-center md:text-left">
              Cassy
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row font-orbitron items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            {/* Replace <a> with <Link> for internal navigation */}
            <Link to="/forum" className="hover:text-blue-400 transition">
              Forum
            </Link>
            <Link to="/garbage" className="hover:text-blue-400 transition">
              Garbage Disposal Map
            </Link>
            <Link to="/game" className="hover:text-blue-400 transition">
              Climate Game
            </Link>
            <Link to="/doomsday" className="hover:text-blue-400 transition">
              Doomsday Clock
            </Link>
            <Link to="/blogpage" className="hover:text-blue-400 transition">
              Blogs
            </Link>
            <Link to="/profile" className="hover:text-blue-400 transition">
              Profile
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mb-8 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </a>
          </div>

          {/* Subscription Form */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4 font-orbitron">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-auto px-6 py-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-md border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Email Address"
            />
            <button
              className="w-full md:w-auto px-6 py-3 font-orbitron bg-white bg-opacity-20 backdrop-blur-md border border-white rounded-lg text-white font-semibold hover:bg-opacity-30 transition"
              type="button"
              onClick={() => {
                // Implement subscription logic here
                alert('Subscribed successfully!');
              }}
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm font-orbitron">
            &copy; {new Date().getFullYear()} Cassy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
