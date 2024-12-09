import React, { useState } from 'react';
import { useGame } from './GameContext';
import GameCard from './GameCard';
import '../CSS/GameDashboard.css';

const GameDashboard = ({ games = [], onDeleteGame, onEditGame }) => {
  const { setCurrentGame } = useGame();
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    setCurrentGame(game); 
    setSelectedGame(game); 
  };

  return (
    <div className="contentWrapper">
      <div className="contentGrid">
        <aside className="sidebar">
          <div className="gamesSection">
            <h1 className="sectionTitle">Games</h1>
            {games.map((game, index) => (
              <div>
                <button 
                  className="gameButton"
                  onClick={() => handleGameClick(game)}
                  aria-label={`Select game from ${game.date}`}
                >
                  <GameCard
                    id = {game.id}

                    date={game.date}
                    duration={game.duration}

                    score = {game.score}
                    rallies ={game.rallies}
                    sets = {game.sets}
                    smashfg = {game.smashfg}
                    smasshattempt = {game.smasshattempt}
                    dropfg ={game.dropfg}
                    dropattempt = {game.dropattempt}
                    clearfg = {game.clearfg}
                    clearattempt ={game.clearattempt}
                    result = {game.result}


                    gameNum={index + 1}
                    selected={selectedGame?.id === game.id}
                  />
                </button>
                <div className="buttonContainer">
                  <button 
                    onClick={() => onEditGame(game, index)}
                    className="editButton"
                    aria-label={`Edit game from ${game.date}`}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => onDeleteGame(index)}
                    className="deleteButton"
                    aria-label={`Delete game from ${game.date}`}
                  >
                    Delete
                  </button>
                </div>
                </div>
            ))}
          </div>
        </aside>

        <main className="mainSection">
          <div className="statsContainer">
            <div className="statsOverlay">
              
            {selectedGame ? (
              <> 
              <h1>Individual Game Stats</h1> 
              <div className ="videoDashboard">
              <p>Video:</p>  
              {selectedGame.youtubeUrl ? ( 
                <iframe 
                className="centeredVideo"
                width="640" 
                height="360" 
                src={`https://www.youtube.com/embed/${new URL(selectedGame.youtubeUrl).searchParams.get('v')}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen title="YouTube video" >

                </iframe> ) : ( "No video attached" )}<br/>
                  <br/>
                  </div>
                  <div className="gameStatsDashboard">
                  <p>Score: {selectedGame.score}</p>
                <br/>
                Rallies: {selectedGame.rallies}   <br/>
                <br/>
                Sets:    {selectedGame.sets} <br/>
                <br/>
                SmasheFG:  {selectedGame.smashfg} <br/> 
                <br/>
                SmashAttempt:  {selectedGame.smasshattempt} <br/>
                <br/>
                DropFG:  {selectedGame.dropfg} <br/>
                <br/>
                DropAttempt:  {selectedGame.dropattempt} <br/>
                <br/>
                ClearFG:  {selectedGame.clearfg} <br/>
                <br/>
                ClearAttempt:  {selectedGame.clearattempt} <br/>
                <br/>
                Result: {selectedGame.result}  <br/>
                <br/>
                
              </div> 
              </> 
            ) : ( 

               <h1>No Game Selected</h1> )}
              
              </div>
          </div>
        </main>
      </div>
    </div>
  );
};
//{selectedGame.duration} da syntax for game stats

export default GameDashboard;