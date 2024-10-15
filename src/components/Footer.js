// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20"> {/* Increased vertical padding from py-12 to py-20 */}
      <div className="max-w-6xl mx-auto px-8"> {/* Increased horizontal padding from px-4 to px-8 */}
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12"> {/* Increased bottom margin from mb-8 to mb-12 */}
          {/* Logo or Brand Name */}
          <div className="mb-8 md:mb-0"> {/* Increased bottom margin for better spacing on mobile */}
            <h1 className="text-[70px] font-caramel font-bold">
              Cassy
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex font-orbitron space-x-8"> {/* Increased space between links from space-x-6 to space-x-8 */}
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12"> {/* Increased bottom margin from mb-8 to mb-12 */}
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-8 md:mb-0"> {/* Increased space between icons from space-x-4 to space-x-6 */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaFacebookF size={30} /> {/* Increased size from 20 to 30 */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaTwitter size={30} /> {/* Increased size from 20 to 30 */}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaLinkedinIn size={30} /> {/* Increased size from 20 to 30 */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaInstagram size={30} /> {/* Increased size from 20 to 30 */}
            </a>
          </div>

          {/* Subscription Form */}
          <div className="flex space-x-4 font-orbitron"> {/* Increased space between input and button from space-x-2 to space-x-4 */}
            <input
              type="email"
              placeholder="Your Email"
              className="px-6 py-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-md border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
            <button className="px-6 py-3 font-orbitron bg-white bg-opacity-20 backdrop-blur-md border border-white rounded-lg text-white font-semibold hover:bg-opacity-30 transition">
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
