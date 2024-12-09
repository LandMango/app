import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [currentGame, setCurrentGame] = useState(null);

  return (
    <GameContext.Provider value={{ currentGame, setCurrentGame  }}>
      {children}
    </GameContext.Provider>
  );
};