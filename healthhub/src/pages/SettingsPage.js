import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/SettingsPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";

function SettingsPage() {
    const {username} = useParams();
    
    return (
      <div className="SettingsPage">
        <div className="settingspage_header">
          <Header Tab={'Settings'} username={username}/>
        </div>
        <div className="settingspage_content">
          <div className="settingspage_profile">
            <ProfileSession username={username}/>
          </div>
          <div className="settingspage_SettingsSession">
          {/* 구현한 SettingsSession 여기에 넣으면 됩니다. */}
          </div>
        </div>
      </div>
    );
  }

  export default SettingsPage