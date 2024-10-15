// src/pages/Profile.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  format,
  subDays,
  addDays,
  isAfter,
  startOfWeek,
} from 'date-fns';

export default function Profile() {
  const today = new Date();
  const startDate = subDays(today, 364); // Past 365 days including today

  // Define specific active days (e.g., today, yesterday, etc.)
  const activeDays = [
    format(today, 'yyyy-MM-dd'),
    format(subDays(today, 1), 'yyyy-MM-dd'),
    format(subDays(today, 2), 'yyyy-MM-dd'),
    format(subDays(today, 3), 'yyyy-MM-dd'),
    format(subDays(today, 4), 'yyyy-MM-dd'),
  ];

  // Simulate activity data for each day in the past year
  const activityData = {};

  for (let i = 0; i <= 364; i++) {
    const date = subDays(today, i);
    const dateString = format(date, 'yyyy-MM-dd');
    activityData[dateString] = {
      date,
      active: activeDays.includes(dateString),
    };
  }

  // Generate weeks data for the calendar grid
  const weeks = [];
  let date = startOfWeek(startDate);

  while (date <= today) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = addDays(date, i);
      const dateString = format(day, 'yyyy-MM-dd');
      if (isAfter(day, today)) {
        week.push(null); // Future dates
      } else {
        week.push(activityData[dateString] || { date: day, active: false });
      }
    }
    weeks.push(week);
    date = addDays(date, 7);
  }

  return (
    <>
      {/* Add Custom CSS */}
      <style>
        {`
          body {
            background-color: black;
          }
        `}
      </style>

      <Navbar />
      {/* Main Container */}
      <div className="min-h-screen mt-28 text-white font-orbitron">
        {/* Profile Section */}
        <div className="relative container mx-auto py-12 px-4 md:px-8 lg:px-16">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 z-0"
            style={{ backgroundImage: `url('https://via.placeholder.com/1920x400')` }}
          ></div>
          {/* Profile Header */}
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start mb-12 bg-white bg-opacity-10 p-6 md:p-8 rounded-lg backdrop-blur-lg shadow-lg">
            <img
              src="https://via.placeholder.com/100"
              alt="Avatar"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 md:mb-0 mr-0 md:mr-6 border-2 border-gray-200"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-caramel">Clark Kent</h1>
              <p className="text-md md:text-xl text-gray-300 mt-2">Rank: #12345</p>
              <div className="mt-2 flex justify-center md:justify-start space-x-3">
                <span className="px-4 py-1 bg-green-500 rounded-full text-xs">Active</span>
                <span className="px-4 py-1 bg-red-500 rounded-full text-xs">Cassy Rank 2300</span>
              </div>
            </div>
          </div>

          {/* Achievements or Stats Section */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-lg text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-green-400">Total Challenges</h3>
              <p className="mt-4 text-4xl md:text-5xl font-bold text-white">350</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-lg text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">Longest Streak</h3>
              <p className="mt-4 text-4xl md:text-5xl font-bold text-white">45 days</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-lg text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">Current Streak</h3>
              <p className="mt-4 text-4xl md:text-5xl font-bold text-white">10 days</p>
            </div>
          </div>

          {/* Activity Calendar Section */}
          <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-4 md:p-8 mt-12 overflow-x-auto">
            {/* Month Labels */}
            <div className="flex mb-4 ml-2 md:ml-10">
              {weeks.map((week, i) => (
                <div key={i} className="flex-1">
                  {i % 2 === 0 && week[0] && (
                    <div className="text-xs md:text-sm text-gray-300 text-center truncate">
                      {format(week[0].date, 'MMM')}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="flex">
              {/* Day Labels */}
              <div className="flex flex-col mr-2 md:mr-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                  (day, index) => (
                    <div
                      key={index}
                      className="text-xs text-gray-300 h-4 md:h-6 w-8 md:w-10 mb-1 text-right"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>
              {/* Activity Squares */}
              <div className="flex">
                {weeks.map((week, i) => (
                  <div key={i} className="flex flex-col space-y-1">
                    {week.map((day, j) => (
                      <div
                        key={j}
                        className={`w-6 h-6 md:w-8 md:h-8 rounded-md border border-white ${
                          day && day.active ? 'bg-green-500' : 'bg-transparent'
                        } transition transform hover:scale-110 hover:shadow-lg`}
                        title={`Date: ${
                          day ? format(day.date, 'yyyy-MM-dd') : ''
                        }, Active: ${day && day.active ? 'Yes' : 'No'}`}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function getActivityColor(count) {
  // This function is no longer needed as we're handling active days differently
  return '';
}
