// src/pages/Garbage.jsx

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { useGeolocated } from 'react-geolocated';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import hill from '../components/assets/hill.jpg';
import eco from '../components/assets/eco.jpg';
import garbage from '../components/assets/garb.jpg';
import plant from '../components/assets/plant.jpg';
import loc from '../components/assets/loc.webp';

// Custom icons using placeholder images
const garbageIcon = new L.Icon({
  iconUrl: garbage,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const plantationIcon = new L.Icon({
  iconUrl: plant,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const hillIcon = new L.Icon({
  iconUrl: hill,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const environmentalIcon = new L.Icon({
  iconUrl: eco,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Red pin for user's current location
const userLocationIcon = new L.Icon({
  iconUrl: loc,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Garbage() {
  const [pins, setPins] = useState([]);
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Use geolocation to get the user's current position
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  // Function to generate random lat/lng within a bounding box
  const getRandomPosition = (center, offset) => {
    const randomLat = center[0] + (Math.random() * offset * 2 - offset);
    const randomLng = center[1] + (Math.random() * offset * 2 - offset);
    return [randomLat, randomLng];
  };

  // Function to populate pins with random positions and types
  const generateRandomPins = (center, numPins = 20) => {
    const pinTypes = ['garbage', 'plantation', 'hill', 'environmental'];
    const newPins = [];

    for (let i = 0; i < numPins; i++) {
      const type = pinTypes[Math.floor(Math.random() * pinTypes.length)];
      const position = getRandomPosition(center, 0.05); // 0.05 is an arbitrary offset for latitude/longitude

      newPins.push({
        id: i,
        type,
        position,
        name: `${type.charAt(0).toUpperCase() + type.slice(1)} Pin ${i + 1}`,
      });
    }

    setPins(newPins);
  };

  // Hook to generate pins once the user's position is obtained
  useEffect(() => {
    if (coords) {
      generateRandomPins([coords.latitude, coords.longitude]);
    }
  }, [coords]);

  const getIconByType = (type) => {
    switch (type) {
      case 'garbage':
        return garbageIcon;
      case 'plantation':
        return plantationIcon;
      case 'hill':
        return hillIcon;
      case 'environmental':
        return environmentalIcon;
      default:
        return garbageIcon;
    }
  };

  const openMap = () => {
    setIsMapOpen(true);
  };

  const closeMap = () => {
    setIsMapOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-5xl lg:text-[120px] mt-36 md:mt-20 font-caramel text-center mb-8">
          Nearby Environmental Activities
        </h1>

        {/* Glassmorphism Cards for Pin Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-left">
            <img src={garbage} alt="Garbage Pin" className="inline w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold text-red-600 mb-2 font-orbitron">Garbage Disposal</h3>
            <p className="text-gray-200 font-orbitron">
              These red pins mark garbage disposal points near your location.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-left">
            <img src={plant} alt="Plantation Pin" className="inline w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold text-green-600 mb-2 font-orbitron">Plantation</h3>
            <p className="text-gray-200 font-orbitron">
              Green pins show nearby plantation areas where you can contribute to reforestation efforts.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-left">
            <img src={hill} alt="Hill Pin" className="inline w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold text-blue-600 mb-2 font-orbitron">Hill</h3>
            <p className="text-gray-200 font-orbitron">
              Blue pins indicate nearby hills or elevations.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-6 text-left">
            <img src={eco} alt="Environmental Pin" className="inline w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold text-orange-600 mb-2 font-orbitron">Environmental Activities</h3>
            <p className="text-gray-200 font-orbitron">
              Orange pins mark spots where environmental activities, such as cleanups or eco-events, are happening.
            </p>
          </div>
        </div>

        <button
          onClick={openMap}
          className="bg-green-500 hover:bg-green-600 text-white font-orbitron py-2 px-6 rounded-full focus:outline-none transition mb-8"
        >
          Open Map
        </button>

        {isMapOpen && (
          <div className="relative">
            <div className="container mx-auto px-4 py-10">
              {isGeolocationAvailable && isGeolocationEnabled && coords ? (
                <MapContainer
                  center={[coords.latitude, coords.longitude]}
                  zoom={13}
                  style={{ height: '500px', width: '100%' }}
                  className="rounded-lg overflow-hidden"
                >
                  {/* TileLayer for map background */}
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />

                  {/* Red Pin for User's Current Location */}
                  <Marker position={[coords.latitude, coords.longitude]} icon={userLocationIcon}>
                    <Popup>
                      <span className="font-orbitron">You are here</span>
                    </Popup>
                  </Marker>

                  {/* Display randomly generated pins */}
                  {pins.map((pin) => (
                    <Marker key={pin.id} position={pin.position} icon={getIconByType(pin.type)}>
                      <Tooltip>
                        <span className="font-orbitron">{pin.name}</span>
                      </Tooltip>
                      <Popup>
                        <span className="font-orbitron">{pin.name}</span>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              ) : (
                <div className="text-center mt-8">
                  {isGeolocationAvailable ? (
                    isGeolocationEnabled ? (
                      <p>Fetching your location...</p>
                    ) : (
                      <p>Please enable location services to view nearby environmental activities.</p>
                    )
                  ) : (
                    <p>Geolocation is not available on your device.</p>
                  )}
                </div>
              )}

              <button
                onClick={closeMap}
                className="mt-6 bg-red-500 hover:bg-red-600 text-white font-orbitron py-2 px-6 rounded-full focus:outline-none transition"
              >
                Close Map
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
