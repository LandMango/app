import * as React from "react";
import './Logo.css';
import './NavigationBar.css';
import './NavigationLink.css';
import './AddProfile.css';

import { Link } from 'react-router-dom';
import { useProfile } from './ProfileContext';


//could put current profile name, needs to be refresh after deletion though
export function NavigationBar() {

  const { currentProfile } = useProfile(); 

  return (
    <nav className="navigationContainer">
      <div className={"mainWrapper"}>
        <header className={"header"}>
          <div>
            BB
          </div>
          <div className={"navLinks"}>
            <Link to="/" className="navItem">Profiles</Link>
            <Link to="/glossary" className="navItem">Glossary</Link>
            {currentProfile ? (
              <Link to={`/stats/${currentProfile.id}`} className="navItem">Stats</Link>
            ) : (
              <span className="navItem disabled">Stats</span>
            )}
          </div>
        </header>
      </div>
    </nav>
  );
}


export default NavigationBar;
