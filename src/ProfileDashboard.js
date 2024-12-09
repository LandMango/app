import * as React from "react";
import ProfileCard  from './ProfileCard';
import { Link } from "react-router-dom"; 
import './ProfileDashboard.css';
import { useProfile } from './ProfileContext';



 const ProfileDashboard = ({ profiles= [], onDeleteProfile, onEditProfile}) => {
  const { setCurrentProfile } = useProfile(); // setting the currentProf
  const linkStyle = { textDecoration: 'none', color: 'inherit' }

  return (
    <div className={"container"}>
      <div className={"mainContent"}>
        <div className={"contentWrapper"}>
          <div className={"profilesContainer"}>
            <div className={"profilesList"}>
              {profiles.map((profile,index) => (
                <div>
                  <Link to={`/stats/${profile.id}`} className="profileLink"  onClick={() => setCurrentProfile(profile)} style={linkStyle}>
                <ProfileCard
                  
                  profileName={profile.name}
                  date={profile.date}
                  games={profile.games}

                />
                </Link>
                  <div className="buttonContainer">
                   <button onClick={() => onEditProfile(profile, index)} className="editButton">
                      Edit
                    </button>
                    <button onClick={() => onDeleteProfile(index)} className="deleteButton">
                      Delete
                    </button>
                    
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileDashboard