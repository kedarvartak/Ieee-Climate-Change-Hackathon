// src/components/Blog.jsx
import React from 'react';
import vi from './assets/vid.mp4';

export default function Blog() {
  return (
    <div className="relative w-full h-1/2">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vi}
        autoPlay
        muted
        loop
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-[50px] md:text-[150px] font-caramel font-bold text-white mb-6">
          Read our official docs
        </h2>
        <button className="px-6 mb-12 py-3 font-orbitron bg-white bg-opacity-20 backdrop-blur-md border border-white rounded-lg text-white font-semibold hover:bg-opacity-30 transition">
          Read Blogs
        </button>
      </div>
    </div>
  );
}
