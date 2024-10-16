// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Landing from './pages/LandingPage';
import Blogpage from './pages/Blogpage';
import Forum from './pages/Forum';
import GarbageDisposal from './pages/Garbage';
import ClimateGame from './pages/Game';
import DoomsdayClock from './components/Doomsday';
import Profile from './pages/Profile';
import './index.css'; 
import { ActivityProvider } from '../src/components/ActivityContext';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <ActivityProvider>
      <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogpage" element={<Blogpage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/garbage" element={<GarbageDisposal />} />
        <Route path="/game" element={<ClimateGame />} />
        <Route path="/doomsday" element={<DoomsdayClock />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
    </ActivityProvider>
  );
}
