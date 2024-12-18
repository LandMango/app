import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../NavBar';

import '../CSS/ProfileStatsPage.css';

import GameStatsChart from '../components/GameStatsChart';

function ProfileStatsPage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const currentProfile = storedProfiles.find((profile) => profile.id === id);
    setProfile(currentProfile);
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  const calculatePoints = (game) => {
    if(game.score)
    {
            const sets = game.score.split(',');

    let totalPointsPlayer = 0;
    let totalPointsOpponent = 0;

    sets.forEach(set => {

      const [playerPoints, opponentPoints] = set.trim().split('-').map(Number);

      if (!isNaN(playerPoints) && !isNaN(opponentPoints)) {
        totalPointsPlayer += playerPoints;
        totalPointsOpponent += opponentPoints;
      }
    });
    return {totalPointsPlayer, totalPointsOpponent}
  }
  return {totalPointsPlayer: 0, totalPointsOpponent: 0}
  };

  const convertDurationToSeconds = (duration) => {
    const parts = duration.split(":");
    if (parts.length === 2) {
      const minutes = parseInt(parts[0], 10);
      const seconds = parseInt(parts[1], 10);
      if (!isNaN(minutes) && !isNaN(seconds)) {
        return (minutes * 60) + seconds;
      }
    }
    return 0;
  };
  
  const calculateCumulativeStats = (games) => {
    let totalDuration = 0;
    let totalGames = games.length;
    let totalRallies = 0;
    let totalSets = 0;
    let totalSmashFG = 0;
    let totalSmashAttempt = 0;
    let totalDropFG = 0;
    let totalDropAttempt = 0;
    let totalClearFG = 0;
    let totalClearAttempt = 0;
    let totalDriveFG = 0;
    let totalDriveAttempt = 0;
    let totalWins = 0;
    let totalLosses= 0;
    let validDuration = 0;

    games.forEach(game => {
      if (game.duration) { // Check if the duration is valid
      const parts = game.duration.split(":");
      if (parts.length === 2){
      const minutes = parseInt(parts[0], 10);
      const seconds = parseInt(parts[1], 10);
      if (!isNaN(minutes) && !isNaN(seconds)) {
      totalDuration += minutes * 60 + seconds;
      validDuration++;
      }}
      }
      if(game.result === 'W' || game.result === 'w') totalWins++;
      if (game.result === 'L' || game.result ==='l') totalLosses++;

      totalRallies += parseInt(game.rallies, 10) || 0;
      totalSets += parseInt(game.sets, 10) || 0;
      totalSmashFG += game.smashfg || 0;
      totalSmashAttempt += game.smashattempt || 0;
      totalDropFG += game.dropfg || 0;
      totalDropAttempt += game.dropattempt || 0;
      totalClearFG += game.clearfg || 0;
      totalClearAttempt += game.clearattempt || 0;
      totalDriveFG += game.drivefg || 0;
      totalDriveAttempt += game.driveattempt || 0;

    });

    const winLossRatio = totalWins / (totalLosses || 1);

    return {
      totalDuration,
      totalGames,
      totalRallies,
      totalSets,
      totalSmashFG,
      totalSmashAttempt,
      totalDropFG,
      totalDropAttempt,
      totalClearFG,
      totalClearAttempt,
      totalDriveFG,
      totalDriveAttempt,
      averageDuration: validDuration > 0 ? totalDuration / validDuration : 0,
      smashAccuracy: totalSmashAttempt > 0 ? ((totalSmashFG / totalSmashAttempt) * 100).toFixed(2): 0,
      dropAccuracy: totalDropAttempt > 0 ? ((totalDropFG / totalDropAttempt) * 100).toFixed(2) : 0,
      clearAccuracy: totalClearAttempt > 0 ? ((totalClearFG / totalClearAttempt) * 100).toFixed(2) : 0,
      driveAccuracy: totalDriveAttempt > 0 ? ((totalDriveFG / totalDriveAttempt) * 100).toFixed(2) : 0,
      winPercentage: totalGames > 0 ? ((totalWins / totalGames) * 100).toFixed(2) : '0.00',
      winLossRatio
    };
  };

  const stats = calculateCumulativeStats(profile.games || []);
  //const firstGame = profile.games.length > 0 ? profile.games[0] : null; need if using just first game

  return (
    <div>
        <NavigationBar />
        <div className="profileStatsContainer">
        <h1 className="profileHeader">{profile.name}'s Profile Stats</h1> 
        <h2> Cumulative Stats</h2>
        <table className="statsTable">
          
          <thead> 
            <tr> 
              <th>Total Games</th> 
              <th>Total Duration</th> 
              <th>Average Duration</th>
              <th>Total Rallies</th>
              <th>Total Sets</th>
              <th>Win/Loss Ratio</th>
              <th>Win Percentage</th>
              
              </tr> 
          </thead> 
          <tbody> 
            <tr> 
              <td>{stats.totalGames}</td> 
              <td>{Math.floor(stats.totalDuration / 60)} minutes and {stats.totalDuration % 60} seconds</td>
              <td>{Math.floor(stats.averageDuration / 60)} minutes and {stats.averageDuration % 60} seconds</td>
              <td>{stats.totalRallies}</td> 
              <td>{stats.totalSets}</td>
              <td>{stats.winLossRatio.toFixed(2)}</td>
              <td>{stats.winPercentage}%</td>
            </tr> 
            <tr> 
            </tr> 
            <br/>
          </tbody> 
</table>
<table className ="statsTable">
          <h2> Per Game Stats</h2>
          <thead classname ='statsTableTwo'>
             <th>Game</th> 
             <th>Date</th> 
             <th>Duration</th> 

             <th>Event </th>
             <th>Score</th>
             <th>Match Intensity Index</th> 
             <th>Result</th>
             <th>Rallies</th>
             <th>Sets</th>
             <th>SmashFG</th>
             <th>SmashAttempt</th>
             <th>DropFG</th>
             <th>DropAttempt</th>
             <th>ClearFG</th>
             <th>ClearAttempt</th>
             <th>DriveFG</th>
             <th>DriveAttempt</th>
             <th>Video</th>
           
          </thead>
            <tbody>
            {profile.games.length > 0 ? (
              profile.games.map((game, index) => {
                const points =calculatePoints(game);
                const durInSec= convertDurationToSeconds(game.duration);
                const matchIntensityIndex = durInSec > 0 ? ((points.totalPointsPlayer + points.totalPointsOpponent) / durInSec).toFixed(2) : 'N/A';
                return(
                <tr key={game.id}>
                  <td>Game {index + 1}  </td>
                  <td>{game.date}       </td>
                  <td>{game.duration}   </td>
                  
                  <td>{game.event}      </td>
                  <td>{game.score}      </td>
                  <td>{matchIntensityIndex}</td>
                  <td>{game.result}     </td>
                  <td>{game.rallies}      </td>
                  <td>{game.sets}     </td>
                  <td>{game.smashfg}    </td>
                  <td>{game.smashattempt}</td>
                  <td>{game.dropfg}</td>
                  <td>{game.dropattempt}</td>
                  <td>{game.clearfg}</td>
                  <td>{game.clearattempt}</td>
                  <td>{game.drivefg}</td>
                  <td>{game.driveattempt}</td>
                  <td>{game.youtubeUrl ? (
                    
                    <a href={game.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      Watch Video
                    </a>
                  ) : (
                    "No video"
                  )}
                  </td>
                </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="16">No games available</td>
              </tr>
            )}
          </tbody>
          </table>
          <table className = "statsTable">
          <h2> Advanced Stats</h2>
          <thead className= "statsTableThree">
           <th>Smash Accuracy</th> 
           <th>Drop Accuracy</th>
           <th>Clear Accuracy</th>
           <th>Drive Accuracy</th>



          </thead>

          <tbody>
            <tr>
              <td>{stats.smashAccuracy}%</td>
              <td>{stats.dropAccuracy}%</td>
              <td>{stats.clearAccuracy}%</td>
              <td>{stats.driveAccuracy}%</td>
            </tr>
          </tbody>
        </table>

          <h2>Graphs</h2>
          <div className ="lineChart">
          <GameStatsChart games={profile.games}/>
          </div>
      </div>
    </div>
  );
}

export default ProfileStatsPage;
