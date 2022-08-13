import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/pages/UserPage.css'
import Header from "../components/Header";
import UserSession from '../sessions/UserSession';
import ProfileSession from "../sessions/ProfileSession";
import InitialData from "../components/InitialData";

function UserPage() {
    const {username} = useParams();
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    
    return (
      <div className="UserPage">
        <div className="userpage_header">
          <Header Tab={'My'} username={username}/>
        </div>
        <div className="userpage_content">
          <div className="userpage_profile">
            <ProfileSession username={username} userData={userData}/>
          </div>
          <div className="userpage_UserSession">
            <UserSession/>
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