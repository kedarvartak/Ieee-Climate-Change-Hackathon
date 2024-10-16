// src/context/ActivityContext.jsx

import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ActivityContext = createContext();

// Create a provider component
export const ActivityProvider = ({ children }) => {
  // Load activity data from localStorage or initialize an empty object
  const [activityData, setActivityData] = useState(() => {
    const storedData = localStorage.getItem('activityData');
    return storedData ? JSON.parse(storedData) : {};
  });

  // Save activity data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activityData', JSON.stringify(activityData));
  }, [activityData]);

  // Function to update activity for a specific date
  const updateActivity = (dateString, tasksCompleted) => {
    setActivityData((prevData) => ({
      ...prevData,
      [dateString]: {
        date: new Date(dateString),
        tasksCompleted,
      },
    }));
  };

  return (
    <ActivityContext.Provider value={{ activityData, updateActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};
