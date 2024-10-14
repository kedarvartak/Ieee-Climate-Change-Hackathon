// Navbar.jsx

import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline'; // Importing the hamburger icon

export default function Navbar() {
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
          
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent font-caramel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Website Name "Cassy" */}
            <div className="flex-shrink-0">
              {/* Wrap the website name in a link to navigate to the homepage */}
              <a href="/" className="text-white text-6xl font-caramel">
                Cassy
              </a>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="flex-shrink-0">
              <button
                type="button"
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label="Open Menu"
              >
                <Bars3Icon className="h-8 w-8 mt-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
