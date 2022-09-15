import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/MainPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";
import SettingsSession from "../sessions/SettingsSession";
import InitialData from "../components/InitialData";

function SettingsPage() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});

  return (
    <>
      {Object.keys(userData).length !== 0 &&
        <div className="MainPage">
          <div className="mainpage_header">
            <Header Tab={'Settings'} username={username} userData={userData} />
          </div>
          <div className="mainpage_content">
            <div className="mainpage_profile">
              <ProfileSession username={username} userData={userData} />
            </div>
            <div className="mainpage_session">
              <SettingsSession username={username} userData={userData} />
            </div>
          </div>
        </div>
      }
      <InitialData
        username={username}
        setUserData={setUserData}
      />
    </>


  );
}

export default SettingsPage