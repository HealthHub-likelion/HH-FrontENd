import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/MainPage.css'
import Header from "../components/Header";
import UserSession from '../sessions/UserSession';
import ProfileSession from "../sessions/ProfileSession";
import InitialData from "../components/InitialData";

function UserPage() {
    const {username} = useParams();
    const [userData, setUserData] = useState({});
    
    return (
      <div className="MainPage">
        <div className="mainpage_header">
          <Header Tab={'My'} username={username} userData={userData}/>
        </div>
        <div className="mainpage_content">
          <div className="mainpage_profile">
            <ProfileSession username={username} userData={userData} setUserData={setUserData}/>
          </div>
          <div className="mainpage_session">
            <UserSession userData={userData} setUserData={setUserData}/>
          </div>
        </div>

        <InitialData 
          username={username}
          setUserData={setUserData}
        />
      </div>
    );
  }

  export default UserPage;