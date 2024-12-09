import * as React from "react";
import '../CSS/ProfileCard.css';

export const ProfileCard = ({ profileName, date, games }) => {

  return (
    <div className={"profileCard"}>
      <div className={"avatar"} />
      <div className={"profileInfo"}>
        Profile: {profileName} \ Date: {date} \ Games: {games.length}

      </div>
    </div>
  );
};
export default ProfileCard