import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHeart, faGlobe, faHandsHelping, faTree, faWater, faSeedling, faRecycle } from '@fortawesome/free-solid-svg-icons';

export default function Ticker() {
  const cards = [
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5',
    'Card 6',
    'Card 7',
    'Card 8',
  ];

  // Array of FontAwesome icons to randomly select from
  const icons = [
    faLeaf,
    faHeart,
    faGlobe,
    faHandsHelping,
    faTree,
    faWater,
    faSeedling,
    faRecycle,
  ];

  // Function to randomly pick an icon
  const getRandomIcon = () => {
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div className="w-full space-y-8 mb-40 py-8 bg-black">
      {/* Ticker Left to Right */}
      <div className="overflow-hidden">
        <h1 className="text-7xl xl:text-[130px] 2xl:text-[150px] text-center font-caramel text-white font-bold m-0 leading-none">
          Feeling generous? Donate
        </h1>
        <p className="text-xl text-center text-gray-200 mb-12 font-orbitron">
          Select from our huge variety of donations and charities to help the needy
        </p>
        <div className="flex animate-scrollLeftToRight space-x-4">
          {/* Original Cards */}
          {cards.map((_, index) => (
            <div
              key={`ltr-${index}`}
              className="min-w-[200px] h-32 bg-white bg-opacity-20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg border border-white"
            >
              <FontAwesomeIcon icon={getRandomIcon()} className="text-white text-4xl" />
            </div>
          ))}
          {/* Duplicated Cards for Seamless Scrolling */}
          {cards.map((_, index) => (
            <div
              key={`ltr-dup-${index}`}
              className="min-w-[200px] h-32 bg-white bg-opacity-20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg border border-white"
            >
              <FontAwesomeIcon icon={getRandomIcon()} className="text-white text-4xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Ticker Right to Left */}
      <div className="overflow-hidden">
        <div className="flex animate-scrollRightToLeft space-x-4">
          {/* Original Cards */}
          {cards.map((_, index) => (
            <div
              key={`rtl-${index}`}
              className="min-w-[200px] h-32 bg-white bg-opacity-20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg border border-white"
            >
              <FontAwesomeIcon icon={getRandomIcon()} className="text-white text-4xl" />
            </div>
          ))}
          {/* Duplicated Cards for Seamless Scrolling */}
          {cards.map((_, index) => (
            <div
              key={`rtl-dup-${index}`}
              className="min-w-[200px] h-32 bg-white bg-opacity-20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg border border-white"
            >
              <FontAwesomeIcon icon={getRandomIcon()} className="text-white text-4xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
