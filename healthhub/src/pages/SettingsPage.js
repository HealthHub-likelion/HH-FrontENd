import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/SettingsPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";
import SettingsSession from "../sessions/SettingsSession";

function SettingsPage() {
  const { username } = useParams();

  return (
    <div className="SettingsPage">
      <div className="settingspage_header">
        <Header Tab={'Settings'} username={username} />
      </div>
      <div className="settingspage_content">
        <div className="settingspage_profile">
          <ProfileSession username={username} />
        </div>
        <div className="settingspage_SettingsSession">
          <SettingsSession username={username} />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage