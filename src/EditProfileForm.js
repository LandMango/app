import React, { useState, useEffect } from 'react';
import './EditProfileForm.css'

const EditProfileForm = ({ profile, onSave, onCancel }) => {
  const [editedProfile, setEditedProfile] = useState({
    name: profile.name,
    date: profile.date,
    games: profile.games,
  });

  useEffect(() => {
    setEditedProfile({
      name: profile.name,
      date: profile.date,
      games: profile.games,
    });
  }, [profile]); // for profile prop changes


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedProfile);
  };

  return (
    <div className="formBox">

        <div className="editProfileForm">
        <h4>Edit Profile</h4>
        <form onSubmit={handleSubmit}>
            <div className={"newnameField"}>
            <label>Profile Name:</label>
            <input
                type="name"
                name="name"
                value={editedProfile.name}
                onChange={handleInputChange}
                className={"newNameInput"}
            />
            </div>
            <div className={"newdateField"}>
            <label>Date:</label>
            <input
                type="date"
                name="date"
                value={editedProfile.date}
                onChange={handleInputChange}
                className={"newNameInput"}
            />
            </div>
    
            <button type="submit" className={"newsaveButton"}>Save Changes</button>
            <button type="button" onClick={onCancel} className={"newsaveButton"}>Cancel</button>
        </form>
        </div>
    </div>
  );
};

export default EditProfileForm;