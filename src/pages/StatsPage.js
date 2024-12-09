import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../NavBar';
import AddGame from '../components/AddGame';
import GameDashboard from '../components/GamesDashboard';
import ProfileStats from '../components/ProfileStats';
import EditGameForm from '../components/EditGameForm';

function StatsPage() {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);

  const [games, setGames] = useState([]);
  const [editingGame, setEditingGame] = useState(null);

  

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const currentProfile = storedProfiles.find((profile) => profile.id === id);
    setProfile(currentProfile);
    setGames(currentProfile?.games || []);
  }, [id]);

  const handleAddGame = (gameData) => {
    const newGame = {
      ...gameData,
      id: Date.now().toString()
    };
    const updatedGames = [...games, newGame];
    setGames(updatedGames);
    

    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const updatedProfiles = storedProfiles.map((profile) =>
      profile.id === id ? { ...profile, games: updatedGames } : profile
    );
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  const handleDeleteGame = (index) => {
    const updatedGames = [...games];
    updatedGames.splice(index, 1);
    setGames(updatedGames);
    

    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const updatedProfiles = storedProfiles.map((profile) =>
      profile.id === id ? { ...profile, games: updatedGames } : profile
    );
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  const editGame = (indexToEdit, updatedGame) => {
    const updatedGames = games.map((game, index) =>
      index === indexToEdit ? { ...game, ...updatedGame } : game
    );
    setGames(updatedGames);
    setEditingGame(null);

    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const updatedProfiles = storedProfiles.map((profile) =>
      profile.id === id ? { ...profile, games: updatedGames } : profile
    );
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  const startEditingGame = (game, index) => {
    setEditingGame({ ...game, index });
  };

  return (
    <div>
      <NavigationBar />
      <AddGame onGameAdd={handleAddGame} />
      {editingGame && (
        <EditGameForm
          game={editingGame}
          onSave={(updatedGame) => editGame(editingGame.index, updatedGame)}
          onCancel={() => setEditingGame(null)}
        />
      )}
      <ProfileStats profileId={id} profle={profile} />      
      <GameDashboard 
        games={games} 
        onDeleteGame={handleDeleteGame} 
        onEditGame={startEditingGame}
        
      />
    </div>
  );
}

export default StatsPage;