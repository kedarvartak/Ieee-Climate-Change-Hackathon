// Navbar.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faTree } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Font Awesome Leaf Icon */}
          <div className="flex-shrink-0">
            {/* Optional: Wrap the logo in a link to navigate to the homepage */}
            <a href="/">
              <FontAwesomeIcon icon={faTree} className="h-10 mt-5 w-10 text-white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
