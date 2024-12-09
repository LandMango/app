import React from 'react';
import  './ProfileStats.css';
import { Link } from 'react-router-dom';

const ProfileStats = ({ profileId }) => {
  const linkStyle = { textDecoration: 'none', color: 'inherit' }
    return (
    <button
      className={"profileStatsButton"}
      aria-label="View profile statistics"
    >
      <Link to={`/stats/profile-stats/${profileId}`} style={linkStyle}>Profile Stats</Link>
    </button>
  );
};
export default ProfileStats