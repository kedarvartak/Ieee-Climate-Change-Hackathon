import React from 'react'

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
  ]

  return (
    <div className="w-full space-y-8 mb-40 py-8 bg-black">
      {/* Ticker Left to Right */}
      <div className="overflow-hidden">
        <h2 className="text-[150px] font-bold text-white mb-4 font-caramel text-center">
          Feeling generous? Donate
        </h2>
        <p className="text-xl text-center text-gray-200 mb-12 font-orbitron">
        Select from our huge variety of donations and charities to help the needy
        </p>
        <div className="flex animate-scrollLeftToRight space-x-4">
          {/* Original Cards */}
          {cards.map((card, index) => (
            <div
              key={`ltr-${index}`}
              className="min-w-[200px] h-32 bg-white bg-opacity-20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg border border-white"
            >
              {card}
            </div>
          ))}
          {/* Duplicated Cards for Seamless Scrolling */}
          {cards.map((card, index) => (
            <div
              key={`ltr-dup-${index}`}
              className="min-w-[200px] h-32 bg-white bg-opacity-20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg border border-white"
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* Ticker Right to Left */}
      <div className="overflow-hidden">
        <div className="flex animate-scrollRightToLeft space-x-4">
          {/* Original Cards */}
          {cards.map((card, index) => (
            <div
              key={`rtl-${index}`}
              className="min-w-[200px] h-32 bg-white bg-opacity-20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg border border-white"
            >
              {card}
            </div>
          ))}
          {/* Duplicated Cards for Seamless Scrolling */}
          {cards.map((card, index) => (
            <div
              key={`rtl-dup-${index}`}
              className="min-w-[200px] h-32 bg-white bg-opacity-20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg border border-white"
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
