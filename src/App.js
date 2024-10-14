// src/App.jsx

import React from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component

export default function App() {
  // Define the handleButtonClick function
  const handleButtonClick = () => {
    // Define the action to perform on button click
    console.log('Button clicked');
    // You can add navigation or other functionality here
  };

  return (
    <>
      {/* Main Container with Black Background */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Navbar */}
        <Navbar />

        {/* Spline Scene and Layered Content */}
        <div className="spline-container w-full h-screen overflow-hidden relative">
          {/* Spline Scene */}
          <Spline
            scene="https://prod.spline.design/yZ663FtKjJqqEThr/scene.splinecode"
            className="spline-scene w-full h-full absolute top-0 left-0 z-0"
          />

          {/* Header Text, Description, and Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
            {/* Header Text */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[200px] 2xl:text-[250px] font-caramel text-white font-bold m-0 leading-none">
              Climate Cassy
            </h1>

            {/* Small Description */}
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-orbitron font-semibold max-w-2xl m-0">
              Empowering you to take meaningful action against climate change with personalized insights and guidance.
            </p>

            {/* Button with Hover Effects */}
            <button
              onClick={handleButtonClick}
              className="mt-24 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white bg-opacity-30 backdrop-blur-lg rounded-full flex items-center justify-center shadow-md border-2 border-white hover:bg-opacity-50 transition"
              aria-label="Next Action"
            >
              {/* Right-Pointing Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
