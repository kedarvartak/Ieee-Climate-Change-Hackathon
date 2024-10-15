// src/pages/Landing.jsx

import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import '../pages/App.css';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Blog from '../components/blog';
import Footer from '../components/Footer';
import Cassy from '../components/Cassy';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import Blob from '../components/Blob';

export default function Landing() {
  const cardsSectionRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define navigation handlers for each card
  const navigateTo = (path) => {
    navigate(path);
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
            <h1 className="text-9xl xl:text-[200px] 2xl:text-[250px] font-caramel text-white font-bold m-0 leading-none">
              Climate Cassy
            </h1>

            {/* Small Description */}
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-orbitron font-semibold max-w-2xl m-0">
              Empowering you to take meaningful action against climate change with personalized insights and guidance.
            </p>

            {/* Chevron Button with Infinite Animation */}
            <button
              onClick={handleButtonClick}
              className="mt-24 w-24 h-24 bg-transparent flex items-center justify-center"
              aria-label="Scroll Down"
            >
              <div className="chevrons">
                {[...Array(3)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-white chevron chevron-animate"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9l7 7 7-7" />
                  </svg>
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* New Card Section */}
      <section ref={cardsSectionRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1 - Single Tall Card */}
            <div
              className="lg:row-span-5 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-left flex flex-col relative overflow-hidden transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigateTo('/what-is-global-warming')} // Add onClick handler
            >
              <h3 className="text-[80px] font-bold text-red-600 mb-4 font-caramel">What is Global Warming?</h3>
              <p className="text-gray-200 font-orbitron">
                Global warming refers to the long-term rise in Earth's average surface temperature due to human activities, primarily fossil fuel burning, which increases greenhouse gas levels in the atmosphere.
              </p>
              <div className="absolute bottom-[-20px] left-0 w-full h-1/2 bg-cover bg-center" />
            </div>

            {/* Column 2 - First Wide Card */}
            <div
              className="lg:col-span-2 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigateTo('/effects-of-climate-change')} // Add onClick handler
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Effects of Climate Change</h3>
              <p className="text-gray-200 font-orbitron">
                Climate change leads to extreme weather events, rising sea levels, loss of biodiversity, and impacts on agriculture and human health. It poses significant risks to ecosystems and societies worldwide.
              </p>
            </div>

            {/* Column 2 - Smaller Cards */}
            <div
              className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigateTo('/rising-temperatures')}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Rising Temperatures</h3>
              <p className="text-gray-200 font-orbitron">
                Average global temperatures have risen significantly, leading to heatwaves, altered weather patterns, and melting polar ice caps.
              </p>
            </div>
            <div
              className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigateTo('/sea-level-rise')}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Sea Level Rise</h3>
              <p className="text-gray-200 font-orbitron">
                Melting ice sheets and glaciers contribute to rising sea levels, threatening coastal communities and ecosystems.
              </p>
            </div>
            <div
              className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigateTo('/extreme-weather')}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Extreme Weather</h3>
              <p className="text-gray-200 font-orbitron">
                Increased frequency and intensity of storms, floods, and droughts disrupt lives, economies, and natural habitats.
              </p>
            </div>
            <div
              className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigateTo('/biodiversity-loss')}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Biodiversity Loss</h3>
              <p className="text-gray-200 font-orbitron">
                Changing climates disrupt ecosystems, leading to habitat loss and a decline in plant and animal species.
              </p>
            </div>
            <div
              className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigateTo('/health-impacts')}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Health Impacts</h3>
              <p className="text-gray-200 font-orbitron">
                Climate change exacerbates health issues, including respiratory problems, heat-related illnesses, and the spread of infectious diseases.
              </p>
            </div>
            <div
              className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigateTo('/economic-costs')}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Economic Costs</h3>
              <p className="text-gray-200 font-orbitron">
                The financial burden of climate-related disasters, loss of productivity, and adaptation measures strain economies worldwide.
              </p>
            </div>

            {/* Column 3 - Second Wide Card */}
            <div
              className="lg:col-span-2 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigateTo('/mitigation-strategies')}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Mitigation Strategies</h3>
              <p className="text-gray-200 font-orbitron">
                Mitigation involves efforts to reduce or prevent the emission of greenhouse gases. Strategies include renewable energy adoption, energy efficiency, reforestation, and developing sustainable practices across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Take Action Now Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          {/* Header */}
          <h2 className="text-[150px] font-bold text-white mb-4 font-caramel">
            Take Action Now
          </h2>
          {/* Small Description */}
          <p className="text-xl text-gray-200 mb-12 font-orbitron">
            Discover how you can make a difference in combating climate change.
          </p>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card 1: Join Our Forum */}
            <div
              className="group relative bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl h-80 cursor-pointer"
              onClick={() => navigateTo('/forum')} // Link to Forum page
            >
              {/* Card Content */}
              <div className="flex items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-red-600 font-orbitron">
                  Join Our Forum
                </h3>
              </div>
              {/* Overlay for Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                <p className="text-gray-200 mb-4 font-orbitron">
                  Share your ideas and tactics to combat climate change without donating.
                </p>
                <Link
                  to="/forum" // Navigate to Forum page
                  className="text-red-600 underline font-orbitron"
                >
                  Know More
                </Link>
              </div>
            </div>

            {/* Card 2: Interactive Climate Game */}
            <div
              className="group relative bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl h-80 cursor-pointer"
              onClick={() => navigateTo('/game')} // Link to Game page
            >
              {/* Card Content */}
              <div className="flex items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-red-600 font-orbitron">
                  Interactive Climate Game
                </h3>
              </div>
              {/* Overlay for Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                <p className="text-gray-200 mb-4 font-orbitron">
                  Understand climate change and tackle issues in a fun, gamified way.
                </p>
                <Link
                  to="/game" // Navigate to Game page
                  className="text-red-600 underline font-orbitron"
                >
                  Know More
                </Link>
              </div>
            </div>

            {/* Card 3: Find Garbage Disposal */}
            <div
              className="group relative bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl h-80 cursor-pointer"
              onClick={() => navigateTo('/garbage-disposal')} // Link to Garbage Disposal page
            >
              {/* Card Content */}
              <div className="flex items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-red-600 font-orbitron">
                  Find Garbage Disposal
                </h3>
              </div>
              {/* Overlay for Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                <p className="text-gray-200 mb-4 font-orbitron">
                  Locate the nearest garbage disposal and other environmental activities with our interactive map.
                </p>
                <Link
                  to="/garbage-disposal" // Navigate to Garbage Disposal page
                  className="text-red-600 underline font-orbitron"
                >
                  Know More
                </Link>
              </div>
            </div>

            {/* Card 4: Environmental Docs */}
            <div
              className="group relative bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl h-80 cursor-pointer"
              onClick={() => navigateTo('/environmental-docs')} // Link to Environmental Docs page
            >
              {/* Card Content */}
              <div className="flex items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-red-600 font-orbitron">
                  Doomsday Clock
                </h3>
              </div>
              {/* Overlay for Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                <p className="text-gray-200 mb-4 font-orbitron">
                  A clock that predicts the world end if we dont take action now.
                </p>
                <Link
                  to="/environmental-docs" // Navigate to Environmental Docs page
                  className="text-red-600 underline font-orbitron"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Components */}
      <Ticker />  
      <Blog />  
      <Footer />   
      <Cassy /> 
      <Blob/>          
    </>
  );
}
