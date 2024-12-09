import React, { useState } from 'react';
import Popup from './GamePopup';
import '../CSS/AddGame.css';
import '../CSS/GamePopup.css';

const AddGame = ({ onGameAdd }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const gameData = {
      date: formData.get('date'),
      duration: formData.get('duration'),
      event: formData.get('event'),
      youtubeUrl: formData.get('youtubeUrl'),

      score: formData.get('score'),
      rallies: formData.get('rallies'),
      sets: formData.get('sets'),

      smashfg: formData.get('smashfg'),
      smashattempt: formData.get('smashattempt'),

      dropfg: formData.get('dropfg'),
      dropattempt: formData.get('dropattempt'),

      clearfg: formData.get('clearfg'),
      clearattempt: formData.get('clearattempt'),

      result: formData.get('result')

    };

    onGameAdd(gameData);
    setButtonPopup(false);
    e.target.reset();
  };

  return (
    <div>
      <button 
        className="addGameButton"
        onClick={() => setButtonPopup(true)}
        aria-label="Add Game"
      >
        Add Game
      </button>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form onSubmit={handleSubmit} className="gformContent">
          <h1>Game Information</h1>
          <div className="gmainColumn">
            <div className="gformFields">
              <div className="gdateField">
                <label htmlFor="date" className="ginputTitles">Game Date: </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  aria-label="Game Date"
                  className="gdateInput"
                />
              </div>

              <div className="geventField"> 
                <label htmlFor="event" className="ginputTitles">Event: </label> 
                <input 
                  type="text" 
                  id="event" 
                  name="event" 
                  aria-label="Event" 
                  className="geventInput" 
                  placeholder="Event (e.g. MD, WS, MX)"/> 
                </div>

              <div className="gscoreField"> 
                 <label htmlFor="score" className="ginputTitles">Score: </label>
                 <input 
                   type="text" 
                   id="score" 
                   name="score" 
                   aria-label="Score" 
                   className="gscoreInput" 
                   placeholder="Score"/> 
                </div>

              <div className="gralliesField"> 
                <label htmlFor="rallies" className="ginputTitles">Rallies: </label> 
                <input 
                  type="number" 
                  id="rallies" 
                  name="rallies" 
                  aria-label="Rallies" 
                  className="gralliesInput"/> 
                  </div>

              <div className="gsetsField"> 
                <label htmlFor="sets" className="ginputTitles">Sets: </label> 
                <input 
                  type="number" 
                  id="sets" 
                  name="sets" 
                  aria-label="Sets" 
                  className="gsetsInput" 
                  /> 
               </div>

              <div className="gsmashfgField"> 
                      <label htmlFor="smashfg" className="ginputTitles">Smash FG: </label> 
                      <input 
                      type="number" 
                      id="smashfg" 
                      name="smashfg" 
                      aria-label="Smash FG" className="gsmashfgInput"  /> 
                      </div> 
               <div className="gsmashattemptField"> 
                    <label htmlFor="smashattempt" className="ginputTitles">Smash Attempt: </label> 
                        
                  <input 
                     type="number" 
                     id="smashattempt" 
                     name="smashattempt" 
                     aria-label="Smash Attempt" 
                     className="gsmashattemptInput" /> 
                </div> 
              <div className="gdropfgField"> 
                <label htmlFor="dropfg" className="ginputTitles">Drop FG: </label> 
                <input 
                type="number" 
                id="dropfg" 
                name="dropfg" 
                aria-label="Drop FG" 
                className="gdropfgInput"  /> 
                </div> 
              <div className="gdropattemptField">
                  <label htmlFor="dropattempt" className="ginputTitles">Drop Attempt: </label> 
                  <input 
                  type="number" 
                  id="dropattempt" 
                  name="dropattempt" 
                  aria-label="Drop Attempt" 
                  className="gdropattemptInput"  /> 
              </div> 
              <div className="gclearfgField"> 
                  <label htmlFor="clearfg" className="ginputTitles">Clear FG: </label> 
                  <input
                   type="number" 
                   id="clearfg"
                   name="clearfg" 
                   aria-label="Clear FG" 
                    className="gclearfgInput"  
                    /> 
              </div> 
              <div className="gclearattemptField"> 
                    <label htmlFor="clearattempt" className="ginputTitles">Clear Attempt: </label> 
                    <input 
                    type="number"
                    id="clearattempt" 
                    name="clearattempt" 
                    aria-label="Clear Attempt" 
                    className="gclearattemptInput"  
                    /> 
              </div>
                
              <div className="gdurationField">
                <label htmlFor="duration" className="ginputTitles">Duration: </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  aria-label="Duration"
                  className="gdurationInput"
                  placeholder="Duration (e.g. 30:00)"
                  pattern="^([0-9]{1,2}:)?[0-5][0-9]:[0-5][0-9]$"
                  
                />
              </div>

              <div className="videoField"> 
                <label 
                htmlFor="youtubeUrl" 
                className="ginputTitles">
                  YouTube URL: 
                  </label> 
                  <input 
                  type="url" 
                  id="youtubeUrl" 
                  name="youtubeUrl" 
                  aria-label="YouTube URL" 
                  className="videoInput" 
                  placeholder="https://www.youtube.com/watch?v=example"  
                  /> 

              </div>

              <div className="gresultField"> 
                <label htmlFor="result" className="ginputTitles">Result: </label> 
                <input 
                type="text" 
                id="result" 
                name="result" 
                aria-label="Result" 
                className="gresultInput" 
                placeholder="Result" /> 
                </div>

              <button type="submit" className="gsaveButton">
                Save
              </button>
            </div>
          </div>
        </form>
      </Popup>
    </div>
  );
};

export default AddGame;