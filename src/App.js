// src/App.jsx

import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import des from './pages/des.png'; // Imported des.png

export default function App() {
  // Create a ref for the cards section
  const cardsSectionRef = useRef(null);

  // Define the handleButtonClick function to scroll to the cards section
  const handleButtonClick = () => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
            <h1 className="text-9xl  xl:text-[200px] 2xl:text-[250px] font-caramel text-white font-bold m-0 leading-none">
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
              className="lg:row-span-5 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-left flex flex-col relative overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Existing Content */}
              <h3 className="text-[80px] font-bold text-red-600 mb-4 font-stalemate">What is Global Warming?</h3>
              <p className="text-gray-200 font-orbitron">
                Global warming refers to the long-term rise in Earth's average surface temperature due to human activities, primarily fossil fuel burning, which increases greenhouse gas levels in the atmosphere.
              </p>

              {/* Adjusted Bottom Half Background Image */}
              <div
                className="absolute bottom-[-20px] left-0 w-full h-1/2 bg-cover bg-center"
                style={{ backgroundImage: `url(${des})` }}
              />
            </div>

            {/* Column 2 - First Wide Card */}
            <div className="lg:col-span-2 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Effects of Climate Change</h3>
              <p className="text-gray-200 font-orbitron">
                Climate change leads to extreme weather events, rising sea levels, loss of biodiversity, and impacts on agriculture and human health. It poses significant risks to ecosystems and societies worldwide.
              </p>
            </div>

            {/* Column 2 - Smaller Cards */}
            <div className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Rising Temperatures</h3>
              <p className="text-gray-200 font-orbitron">
                Average global temperatures have risen significantly, leading to heatwaves, altered weather patterns, and melting polar ice caps.
              </p>
            </div>
            <div className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Sea Level Rise</h3>
              <p className="text-gray-200 font-orbitron">
                Melting ice sheets and glaciers contribute to rising sea levels, threatening coastal communities and ecosystems.
              </p>
            </div>
            <div className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Extreme Weather</h3>
              <p className="text-gray-200 font-orbitron">
                Increased frequency and intensity of storms, floods, and droughts disrupt lives, economies, and natural habitats.
              </p>
            </div>
            <div className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Biodiversity Loss</h3>
              <p className="text-gray-200 font-orbitron">
                Changing climates disrupt ecosystems, leading to habitat loss and a decline in plant and animal species.
              </p>
            </div>
            <div className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Health Impacts</h3>
              <p className="text-gray-200 font-orbitron">
                Climate change exacerbates health issues, including respiratory problems, heat-related illnesses, and the spread of infectious diseases.
              </p>
            </div>
            <div className="lg:col-span-1 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Economic Costs</h3>
              <p className="text-gray-200 font-orbitron">
                The financial burden of climate-related disasters, loss of productivity, and adaptation measures strain economies worldwide.
              </p>
            </div>

            {/* Column 3 - Second Wide Card */}
            <div className="lg:col-span-2 bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-red-600 mb-4 font-orbitron">Mitigation Strategies</h3>
              <p className="text-gray-200 font-orbitron">
                Mitigation involves efforts to reduce or prevent the emission of greenhouse gases. Strategies include renewable energy adoption, energy efficiency, reforestation, and developing sustainable practices across industries.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
