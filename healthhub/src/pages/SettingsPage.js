import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/SettingsPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";
import SettingsSession from "../sessions/SettingsSession";
import InitialData from "../components/InitialData";

function SettingsPage() {
  const { username } = useParams();
  const [dataPrivate, setdataPrivate] = useState(true);
  const [userData, setUserData] = useState({});

  return (
    <div className="SettingsPage">
      <div className="settingspage_header">
        <Header Tab={'Settings'} username={username} />
      </div>
      <div className="settingspage_content">
        <div className="settingspage_profile">
          <ProfileSession username={username} userData={userData}/>
        </div>
        <div className="settingspage_SettingsSession">
          <SettingsSession username={username} dataPrivate={dataPrivate} setdataPrivate={setdataPrivate} />
        </div>
      </div>

      <InitialData 
          username={username}
          setUserData={setUserData}
        />
    </div>
  );
}

export default SettingsPage