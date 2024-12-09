import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from './NavBar';

import './ProfileStatsPage.css';

import GameStatsChart from './GameStatsChart';

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

  const calculateCumulativeStats = (games) => {
    let totalDuration = 0;
    games.forEach(game => {
      if (game.duration) { // Check if the duration is valid
      const parts = game.duration.split(":");
      if (parts.length === 2){
      const minutes = parseInt(parts[0], 10);
      const seconds = parseInt(parts[1], 10);
      if (!isNaN(minutes) && !isNaN(seconds)) {
      totalDuration += minutes * 60 + seconds;
      }}
      }
    });
    return {
      totalDuration,
      totalGames: games.length
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
              
              </tr> 
          </thead> 
          <tbody> 
            <tr> 
              <td>{stats.totalGames}</td> 
              <td>{Math.floor(stats.totalDuration / 60)} minutes and {stats.totalDuration % 60} seconds</td> 
            </tr> 
            <tr> 
              
            </tr> 
            <br/>
          </tbody> 
          <h2> Per Game Stats</h2>
          <thead classname ='statsTableTwo'>
             <th>Game</th> 
             <th>Date</th> 
             <th>Duration</th> 
             <th>Location</th> 
             <th>Event </th>
             <th>Score</th> 
             <th>Result</th>
             <th>Rallies</th>
             <th>Sets</th>
             <th>SmashFG</th>
             <th>SmashAttempt</th>
             <th>DropFG</th>
             <th>DropAttempt</th>
             <th>ClearFG</th>
             <th>ClearAttempt</th>
             <th>Video</th>
           
          </thead>
            <tbody>
            {profile.games.length > 0 ? (
              profile.games.map((game, index) => (
                <tr key={game.id}>
                  <td>Game {index + 1}  </td>
                  <td>{game.date}       </td>
                  <td>{game.duration}   </td>
                  <td>{game.location}   </td>
                  <td>{game.event}      </td>
                  <td>{game.score}      </td>
                  <td>{game.result}     </td>
                  <td>{game.rallies}      </td>
                  <td>{game.sets}     </td>
                  <td>{game.smashfg}    </td>
                  <td>{game.smashattempt}</td>
                  <td>{game.dropfg}</td>
                  <td>{game.dropattempt}</td>
                  <td>{game.clearfg}</td>
                  <td>{game.clearattempt}</td>
                  <td>{game.youtubeUrl ? (
                    
                    <a href={game.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      Watch Video
                    </a>
                  ) : (
                    "No video"
                  )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="16">No games available</td>
              </tr>
            )}
          </tbody>
          <h2> Advanced Stats</h2>

          <h2>Graphs</h2>
          <div className ="lineChart">
          <GameStatsChart games={profile.games}/>
          </div>
        </table>
      </div>
    </div>
  );
}

export default ProfileStatsPage;
