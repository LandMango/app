import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';  
import GlossaryPage from './pages/GlossaryPage'; 
import StatsPage from './pages/StatsPage';  
import ProfileStatsPage from './pages/ProfileStatsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/stats/:id" element={<StatsPage />} />
        <Route path="/stats/profile-stats/:id" element={<ProfileStatsPage/>} />
        <Route path="/contact" element ={<ContactPage/>} />
      </Routes>
    </div>
  );
}

export default App;