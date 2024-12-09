import * as React from "react";
import '../CSS/AddProfile.css';
import Popup from "./ProfilePopup";
import {useState} from 'react';
import '../CSS/ProfilePopup.css';

const AddProfile = ({ onProfileAdd }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const profileData = {
      id: Date.now().toString(),
      name: formData.get('profileName'),
      date: formData.get('date'),
      games: 0
    };
    onProfileAdd?.(profileData);
    setButtonPopup(false);
    e.target.reset();

  };
  return (
    <div className={"container"}>
      <button 
        className={"addProfileButton"}
        onClick={() => setButtonPopup(true)}
        aria-label="Add Profile"
      >
        Add Profile
      </button>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <form onSubmit={handleSubmit} className={"formContent"}>
          <div className={"mainColumn"}>
            <div className={"formFields"}>
              <div className={"nameField"}>
                <label htmlFor="profileName" className={"inputTitles"}>Profile Name: </label>
                <input
                  type="text"
                  id="profileID"
                  name="profileName"
                  aria-label="Profile Name"
                  placeholder="Name (e.g. Alex)"
                  className={"nameInput"}
                  required
                />
              </div>
              
              <div className={"dateField"}>
                <label htmlFor="date" className={"inputTitles"}>Date: </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  aria-label="Date"
                  className={"dateInput"}
                  
                />
              </div>
              
              <button type="submit" className={"saveButton"}>
                Save
              </button>
            </div>
          </div>
          
        </form>

      </Popup>
    </div>
  );
}
export default AddProfile