// src/pages/Profile.jsx

import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import {
  format,
  subDays,
  addDays,
  isAfter,
  startOfWeek,
} from 'date-fns';
import { ActivityContext } from '../components/ActivityContext';

export default function Profile() {
  const { activityData } = useContext(ActivityContext);

  const today = new Date();
  const startDate = subDays(today, 364); // Past 365 days including today

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
        week.push(activityData[dateString] || { date: day, tasksCompleted: 0 });
      }
    }
    weeks.push(week);
    date = addDays(date, 7);
  }

  // Function to get color based on tasks completed
  const getActivityColor = (tasksCompleted) => {
    if (tasksCompleted === 0) {
      return 'bg-transparent';
    } else if (tasksCompleted === 1) {
      return 'bg-green-200';
    } else if (tasksCompleted === 2) {
      return 'bg-green-400';
    } else if (tasksCompleted === 3) {
      return 'bg-green-600';
    } else if (tasksCompleted >= 4) {
      return 'bg-green-800';
    }
    return 'bg-transparent';
  };

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
            className="absolute inset-0 w-full bg-slate-800 h-full bg-cover bg-center opacity-20 z-0"
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
              <p className="text-md md:text-xl text-gray-300 mt-2">Rank: #2300</p>
              <div className="mt-2 flex justify-center md:justify-start space-x-3">
                <span className="px-4 py-1 bg-green-500 rounded-full text-xs">Active</span>
                <span className="px-4 py-1 bg-red-500 rounded-full text-xs">Cassy Rank 2300</span>
              </div>
            </div>
          </div>

          {/* Achievements or Stats Section */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-lg text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-green-400">Total Tasks Completed</h3>
              <p className="mt-4 text-4xl md:text-5xl font-bold text-white">
                {Object.values(activityData).reduce((acc, day) => acc + day.tasksCompleted, 0)}
              </p>
            </div>
            {/* Add other stats as needed */}
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
                          day
                            ? getActivityColor(day.tasksCompleted)
                            : 'bg-transparent'
                        } transition transform hover:scale-110 hover:shadow-lg`}
                        title={`Date: ${
                          day ? format(day.date, 'yyyy-MM-dd') : ''
                        }, Tasks Completed: ${day ? day.tasksCompleted : 0}`}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
