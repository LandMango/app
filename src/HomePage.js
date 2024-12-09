import React, { useState, useEffect } from 'react'; 

import NavigationBar from './NavBar'; 
import AddProfile from './AddProfile'; 
import ProfileDashboard from './ProfileDashboard';
import EditProfileForm from './EditProfileForm';

function HomePage() {
  const [profiles, setProfiles] = useState(() => {
    // Load profiles from localStorage on initial render
    const storedProfiles = localStorage.getItem('profiles');
    return storedProfiles ? JSON.parse(storedProfiles) : [];
  });

  const [editingProfile, setEditingProfile] = useState(null); // Track which profile is being edited

  useEffect(() => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }, [profiles]);


  const handleProfileAdd = (profile) => {
    setProfiles((prevProfiles) => [...prevProfiles, profile]);
  };

  const deleteProfile = (indexToDelete) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((_, index) => index !== indexToDelete)
    );
  };

    
    const editProfile = (indexToEdit, updatedProfile) => {
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile, index) =>
          index === indexToEdit ? { ...profile, ...updatedProfile } : profile
        )
      );
      setEditingProfile(null); 
    };
  
    const startEditingProfile = (profile, index) => {
      setEditingProfile({ ...profile, index });
    };
  return (
    <div>
      <NavigationBar /> 

      <AddProfile onProfileAdd={handleProfileAdd}/> 
      {editingProfile && (
        <EditProfileForm
          profile={editingProfile}
          onSave={(updatedProfile) => editProfile(editingProfile.index, updatedProfile)}
          onCancel={() => setEditingProfile(null)} 
        />
      )}
      <ProfileDashboard profiles={profiles}  onDeleteProfile={deleteProfile} onEditProfile={startEditingProfile} />

    </div>
  );
}

export default HomePage;