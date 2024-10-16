// src/components/Doomsday.jsx

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

// Import Recharts components
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer
} from 'recharts';

export default function Doomsday() {
  // Set your target date here
  const targetDate = new Date('2100-01-01T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      title: 'Heat Rise Levels',
      percentage: 75,
      color: 'bg-red-500',
      icon: '🔥',
      description: 'Global temperature has risen due to increased greenhouse gases.',
      data: [
        { year: 2000, value: 0.6 },
        { year: 2005, value: 0.8 },
        { year: 2010, value: 0.9 },
        { year: 2015, value: 1.0 },
        { year: 2020, value: 1.2 },
      ],
      visualizationType: 'lineChart',
    },
    {
      title: 'Water Level Rise',
      percentage: 60,
      color: 'bg-blue-500',
      icon: '🌊',
      description: 'Rising sea levels are threatening coastal communities worldwide.',
      data: [
        { year: 2000, value: 3.0 },
        { year: 2005, value: 3.1 },
        { year: 2010, value: 3.2 },
        { year: 2015, value: 3.3 },
        { year: 2020, value: 3.4 },
      ],
      visualizationType: 'barChart',
    },
    {
      title: 'Carbon Emissions Reduction',
      percentage: 45,
      color: 'bg-green-500',
      icon: '🌿',
      description: 'Efforts to reduce global carbon emissions are ongoing but insufficient.',
      data: [
        { sector: 'Transport', value: 24 },
        { sector: 'Industry', value: 21 },
        { sector: 'Electricity', value: 25 },
        { sector: 'Agriculture', value: 14 },
        { sector: 'Buildings', value: 16 },
      ],
      visualizationType: 'pieChart',
    },
    {
      title: 'Renewable Energy Adoption',
      percentage: 55,
      color: 'bg-yellow-500',
      icon: '⚡',
      description: 'The shift to renewable energy sources is critical in combating climate change.',
      data: [
        { source: 'Solar', value: 30 },
        { source: 'Wind', value: 25 },
        { source: 'Hydro', value: 20 },
        { source: 'Geothermal', value: 15 },
        { source: 'Biomass', value: 10 },
      ],
      visualizationType: 'donutChart',
    },
  ];

  const [selectedStatIndex, setSelectedStatIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        {/* Header */}
        <h2 className="text-[70px] mt-32 md:mt-20 md:text-[130px] font-caramel text-red-600 mb-8 text-center">
          Doomsday Clock
        </h2>

        {/* Timer Display */}
        <div className="flex flex-wrap justify-center space-x-4 text-center mb-12">
          <div className="flex flex-col items-center m-2">
            <div className="text-5xl md:text-6xl font-orbitron">{timeLeft.days}</div>
            <div className="text-xl md:text-2xl font-orbitron">Days</div>
          </div>
          <div className="flex flex-col items-center m-2">
            <div className="text-5xl md:text-6xl font-orbitron">{timeLeft.hours}</div>
            <div className="text-xl md:text-2xl font-orbitron">Hours</div>
          </div>
          <div className="flex flex-col items-center m-2">
            <div className="text-5xl md:text-6xl font-orbitron">{timeLeft.minutes}</div>
            <div className="text-xl md:text-2xl font-orbitron">Minutes</div>
          </div>
          <div className="flex flex-col items-center m-2">
            <div className="text-5xl md:text-6xl font-orbitron">{timeLeft.seconds}</div>
            <div className="text-xl md:text-2xl font-orbitron">Seconds</div>
          </div>
        </div>

        {/* Additional Information */}
        <p className="text-center text-lg md:text-xl font-orbitron text-gray-200 max-w-3xl mb-12">
          The Doomsday Clock symbolizes the urgency of addressing climate change and environmental issues. The closer the clock is to midnight, the greater the threat to humanity. Below are key statistics that highlight the current state of our planet and the critical areas where immediate action is needed.
        </p>

        {/* Calamity Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-gray-800 bg-opacity-80 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{stat.icon}</div>
                <h3 className="text-2xl font-orbitron">{stat.title}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                <div
                  className={`${stat.color} h-4 rounded-full`}
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
              <span className="text-lg font-orbitron text-gray-300">{stat.percentage}%</span>
              <p className="mt-2 text-sm font-orbitron text-gray-400">{stat.description}</p>
              {/* See Visualization Link */}
              <button
                onClick={() => setSelectedStatIndex(index)}
                className="mt-4 text-blue-400 hover:text-blue-200 underline font-orbitron"
              >
                See Visualization
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Window */}
      {selectedStatIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-gray-900 rounded-lg p-6 max-w-3xl w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl"
              onClick={() => setSelectedStatIndex(null)}
            >
              &times;
            </button>

            {/* Visualization Content */}
            {(() => {
              const stat = stats[selectedStatIndex];
              return (
                <div>
                  <h3 className="text-3xl font-orbitron mb-4 text-center">{stat.title}</h3>
                  {/* Visualization */}
                  <div className="w-full h-64 flex items-center justify-center">
                    {stat.visualizationType === 'lineChart' && (
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={stat.data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                      </ResponsiveContainer>
                    )}
                    {stat.visualizationType === 'barChart' && (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={stat.data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="value" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                    {stat.visualizationType === 'pieChart' && (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={stat.data}
                            dataKey="value"
                            nameKey="sector"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                          >
                            {stat.data.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={getColor(index)} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    )}
                    {stat.visualizationType === 'donutChart' && (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={stat.data}
                            dataKey="value"
                            nameKey="source"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#82ca9d"
                            label
                          >
                            {stat.data.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={getColor(index)} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                  {/* Description */}
                  <p className="mt-4 text-center text-gray-400">{stat.description}</p>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      
    </div>
  );

  function getColor(index) {
    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1'];
    return colors[index % colors.length];
  }
}
