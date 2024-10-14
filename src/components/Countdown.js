// src/components/CountdownClock.jsx

import React, { useState, useEffect } from 'react';

export default function Countdown({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime); // timeLeft in seconds
  const [isActive, setIsActive] = useState(true); // To control the countdown

  useEffect(() => {
    let intervalId = null;

    if (isActive && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false); // Stop the countdown when it reaches zero
    }

    return () => clearInterval(intervalId);
  }, [isActive, timeLeft]);

  // Function to format timeLeft into HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formatted = [
      hrs.toString().padStart(2, '0'),
      mins.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0'),
    ].join(':');

    return formatted;
  };

  const handleButtonClick = () => {
    // Example action: Restart the countdown
    setTimeLeft(initialTime);
    setIsActive(true);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-8 shadow-lg border-4 border-white">
      {timeLeft > 0 ? (
        <span className="text-white text-8xl font-orbitron">{formatTime(timeLeft)}</span>
      ) : (
        <span className="text-white text-4xl font-orbitron text-center">
          Time is up! Act Now for Climate Change!
        </span>
      )}
    
     {/* Circular Button with Right-Pointing Arrow */}

    </div>
  );
} 

