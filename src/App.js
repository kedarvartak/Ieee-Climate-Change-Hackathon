import React from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';
import Navbar from './components/Navbar';// Import the Navbar component

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Spline Scene */}
      <div className="spline-container w-full h-screen overflow-hidden relative">
        <Spline
          scene="https://prod.spline.design/IefJvfdXki7VqXSv/scene.splinecode"
          className="spline-scene w-full h-full"
        />
      </div>
    </div>
  );
}
