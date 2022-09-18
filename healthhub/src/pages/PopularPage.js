import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/MainPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";
import InitialData from "../components/InitialData";

function PopularPage() {
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
            <div>인기게시물 세션 들어갈 자리</div>
          </div>
        </div>

        <InitialData 
          username={username}
          setUserData={setUserData}
        />
      </div>
    );
  }

  export default PopularPage;