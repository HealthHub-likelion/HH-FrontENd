import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/MainPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";
import RankingSession from "../sessions/RankingSession";
import InitialData from "../components/InitialData";

function RankingPage() {
    const {username} = useParams();
    const [userData, setUserData] = useState({});

    return (
      <div className="MainPage">
        <div className="mainpage_header">
          <Header Tab={'My'} username={username} userData={userData}/>
        </div>
        <div className="mainpage_content">
          <div className="mainpage_profile">
            <ProfileSession username={username} userData={userData}/>
          </div>
          <div className="mainpage_session">
          <div className="mainpage_ranking">
            <RankingSession username={username} userData={userData}/>
          </div>
          </div>
        </div>

        <InitialData 
          username={username}
          setUserData={setUserData}
        />
      </div>
    );
  }

  export default RankingPage;