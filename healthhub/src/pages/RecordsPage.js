import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/MainPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";
import RecordSession from "../sessions/RecordsSession";
import InitialData from "../components/InitialData";

function RecordsPage() {
    const {username} = useParams();
    const [userData, setUserData] = useState({});

    return (
      <div className="MainPage">
        <div className="mainpage_header">
          <Header Tab={'Records'} username={username} userData={userData}/>
        </div>
        <div className="mainpage_content">
          <div className="mainpage_profile">
            <ProfileSession username={username} userData={userData}/>
          </div>
          <div className="mainpage_session">
            <RecordSession userData={userData} setUserData={setUserData}/>
          </div>
        </div>

        <InitialData 
          username={username}
          setUserData={setUserData}
        />
      </div>
    );
  }

  export default RecordsPage;