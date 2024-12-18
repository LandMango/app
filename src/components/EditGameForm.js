import React, { useState, useEffect } from 'react';
import '../CSS/EditGameForm.css'

const EditGameForm = ({ game, onSave, onCancel }) => {
  const [editedGame, setEditedGame] = useState({
    name: game.name,
    date: game.date,
    games: game.games,
    duration: game.duration,
    youtuberUrl: game.youtuberUrl,
    event: game.event,
    score: game.score,
    rallies:game.rallies,
    sets:game.sets,
    smashfg:game.smashfg,
    smashattempt:game.smashattempt,
    dropfg:game.dropfg,
    dropattempt:game.dropattempt,
    clearfg:game.clearfg,
    clearattempt:game.clearattempt,
    drivefg:game.drivefg,
    driveattempt:game.driveattempt,
    result:game.result,
  });

  useEffect(() => {
    setEditedGame({
      name: game.name,
      date: game.date,
      games: game.games,
      duration: game.duration,
      youtuberUrl: game.youtuberUrl,
      event: game.event,
      score: game.score,
      rallies:game.rallies,
      sets:game.sets,
      smashfg:game.smashfg,
      smashattempt:game.smashattempt,
      dropfg:game.dropfg,
      dropattempt:game.dropattempt,
      clearfg:game.clearfg,
      clearattempt:game.clearattempt,
      drivefg:game.drivefg,
      driveattempt:game.driveattempt,
      result:game.result,

    });
  }, [game]); // suppose to run when game changes


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedGame((prevGames) => ({
      ...prevGames,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedGame);
  };

  return (
    <div className="gpopup">

        <div className="gpopup-inner">
        <button type="button" onClick={onCancel} className='gclose-btn' >Cancel</button>
   
        
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
                  value = {editedGame.date}
                  onChange = {handleInputChange}
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
                  placeholder="Event (e.g. MD, WS, MX)"
                  value = {editedGame.event}
                  onChange = {handleInputChange}
                  /> 
                 
                </div>

              <div className="gscoreField"> 
                 <label htmlFor="score" className="ginputTitles">Score: </label>
                 <input 
                   type="text" 
                   id="score" 
                   name="score" 
                   aria-label="Score" 
                   className="gscoreInput" 
                   placeholder="Score (example: 0-0, 0-0 )"
                   value = {editedGame.score}
                   onChange = {handleInputChange}
                   /> 
                   
                </div>

              <div className="gralliesField"> 
                <label htmlFor="rallies" className="ginputTitles">Rallies: </label> 
                <input 
                  type="number" 
                  id="rallies" 
                  name="rallies" 
                  aria-label="Rallies" 
                  className="gralliesInput"
                  value = {editedGame.rallies}
                  onChange = {handleInputChange}
                  /> 
                  
                  </div>

              <div className="gsetsField"> 
                <label htmlFor="sets" className="ginputTitles">Sets: </label> 
                <input 
                  type="number" 
                  id="sets" 
                  name="sets" 
                  aria-label="Sets" 
                  className="gsetsInput" 
                  
                  value = {editedGame.sets}
                  onChange = {handleInputChange}
                  /> 
               </div>

              <div className="gsmashfgField"> 
                      <label htmlFor="smashfg" className="ginputTitles">Smash FG: </label> 
                      <input 
                      type="number" 
                      id="smashfg" 
                      name="smashfg" 
                      aria-label="Smash FG" 
                      className="gsmashfgInput"
                      value = {editedGame.smashfg}
                  onChange = {handleInputChange}
                        /> 
                      </div> 
               <div className="gsmashattemptField"> 
                    <label htmlFor="smashattempt" className="ginputTitles">Smash Attempt: </label> 
                        
                  <input 
                     type="number" 
                     id="smashattempt" 
                     name="smashattempt" 
                     aria-label="Smash Attempt" 
                     className="gsmashattemptInput"
                     value = {editedGame.smashattempt}
                  onChange = {handleInputChange}
                      /> 
                </div> 
              <div className="gdropfgField"> 
                <label htmlFor="dropfg" className="ginputTitles">Drop FG: </label> 
                <input 
                type="number" 
                id="dropfg" 
                name="dropfg" 
                aria-label="Drop FG" 
                className="gdropfgInput"
                value = {editedGame.dropfg}
                  onChange = {handleInputChange}  
                /> 
                </div> 
              <div className="gdropattemptField">
                  <label htmlFor="dropattempt" className="ginputTitles">Drop Attempt: </label> 
                  <input 
                  type="number" 
                  id="dropattempt" 
                  name="dropattempt" 
                  aria-label="Drop Attempt" 
                  className="gdropattemptInput"
                  value = {editedGame.dropattempt}
                  onChange = {handleInputChange}
                    /> 
              </div> 
              <div className="gclearfgField"> 
                  <label htmlFor="clearfg" className="ginputTitles">Clear FG: </label> 
                  <input
                   type="number" 
                   id="clearfg"
                   name="clearfg" 
                   aria-label="Clear FG" 
                    className="gclearfgInput" 
                    value = {editedGame.clearfg}
                  onChange = {handleInputChange} 
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
                    value = {editedGame.clearattempt}
                    onChange = {handleInputChange}
                    /> 
              </div>

              <div className="gdrivefgField"> 
                    <label htmlFor="drivefg" className="ginputTitles">Drive FG: </label> 
                    <input 
                    type="number"
                    id="drivefg" 
                    name="drivefg" 
                    aria-label="Drive FG" 
                    className="gdrivefgInput"  
                    /> 
              </div>

              <div className="gdriveattemptField"> 
                    <label htmlFor="driveattempt" className="ginputTitles">Drive Attempt: </label> 
                    <input 
                    type="number"
                    id="driveattempt" 
                    name="driveattempt" 
                    aria-label="Drive Attempt" 
                    className="gdriveattemptInput"  
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
                  value = {editedGame.duration}
                  onChange = {handleInputChange}
                  
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
                  value = {editedGame.youtuberUrl}
                  onChange = {handleInputChange}
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
                placeholder="Result (e.g W or L)"
                value = {editedGame.result}
                  onChange = {handleInputChange}
                 /> 
                </div>

              <button type="submit" className="gsaveButton">
                Save
              </button>
              
            </div>
          </div>
        </form>
        </div>
    </div>
  );
};
export default EditGameForm;