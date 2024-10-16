// src/pages/Game.jsx

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Spline from '@splinetool/react-spline';

export default function Game() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const stopGame = () => {
    setGameStarted(false);
  };

  return (
    <>
      <style>{`
        body {
          background-color: black;
        }
      `}</style>
      <div className="min-h-screen text-white">
        <Navbar />
        {!gameStarted ? (
          <div className="container mx-auto px-4 py-10 lg:py-20 text-center mt-40 md:mt-16">
            <h1 className="text-5xl md:text-[80px] lg:text-[120px] font-caramel text-white mb-6 lg:mb-8">
              Game Instructions
            </h1>
            <p className="text-base md:text-lg font-orbitron text-gray-200 mb-4 lg:mb-6">
              Welcome to the EcoDrive challenge! You are in control of a car. Your
              goal is to navigate the environment without hitting any trees or
              structures. You must follow the road and avoid obstacles.
              <br /> Use the
              following controls:
            </p>
            <ul className="text-base md:text-lg font-orbitron text-gray-200 mb-6 lg:mb-8 space-y-2">
              <li><strong>W:</strong> Move Forward</li>
              <li><strong>S:</strong> Move Backward</li>
              <li><strong>A:</strong> Turn Left</li>
              <li><strong>D:</strong> Turn Right</li>
            </ul>
            <button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-600 text-white font-orbitron py-2 px-6 md:py-3 md:px-8 rounded-full focus:outline-none transition"
            >
              Start the Game
            </button>
          </div>
        ) : (
          <div className="container mx-auto px-4 py-10 lg:py-20 text-center mt-40 md:mt-16">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mx-auto border-4 border-gray-700 rounded-lg overflow-hidden">
              <div className="transform scale-150 origin-center h-full">
                <Spline scene="https://prod.spline.design/rXStTF5nFqjL6pLi/scene.splinecode" />
              </div>
            </div>
            <button
              onClick={stopGame}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white font-orbitron py-2 px-6 md:py-3 md:px-8 rounded-full focus:outline-none transition"
            >
              Stop the Game
            </button>
          </div>
        )}
      </div>
    </>
  );
}
