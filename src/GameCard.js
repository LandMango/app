import React from 'react';
import './GameCard.css';

const GameCard = ({gameNum, date, duration, selected }) => {
  return (
    <div className= {`gameCard ${selected ? 'selected' : ''}`} >
      <div className="indicator" />
      <div className="gameInfo">
        Game {gameNum} <br />
        Date: {date}<br />
        Duration: {duration}

      </div>
    </div>
  );
};

export default GameCard;