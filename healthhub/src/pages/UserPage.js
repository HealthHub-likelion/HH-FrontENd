import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/UserPage.css'
import Header from "../components/Header";
import UserSession from '../sessions/UserSession';
import ProfileSession from "../sessions/ProfileSession";

function UserPage() {
    const {username} = useParams();
    
    return (
      <div className="UserPage">
        <div className="userpage_header">
          <Header Tab={'My'} username={username}/>
        </div>
        <div className="userpage_content">
          <div className="userpage_profile">
            <ProfileSession username={username}/>
          </div>
          <div className="userpage_UserSession">
            <UserSession/>
          </div>
        </div>
      </div>
    );
  }

  export default UserPage;