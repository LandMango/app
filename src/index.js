import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { ProfileProvider } from './components/ProfileContext';
import { GameProvider } from './components/GameContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProfileProvider> 
    <GameProvider>
    <App />
    </GameProvider>
    </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>
);
