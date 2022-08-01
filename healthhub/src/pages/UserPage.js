import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/UserPage.css'
import Header from "../components/Header";

function UserPage() {
    const {username} = useParams();
    
    return (
      <div className="UserPage">
        <div className="userpage_header">
          <Header Tab={'My'}/>
        </div>
        <div className="userpage_content">
          <div className="userpage_profile">
          프로필 세션
          </div>
          <div className="userpage_UserSession">
          {/* 구현한 UserSession 여기에 넣으면 됩니다. */}
          </div>
        </div>
      </div>
    );
  }

  export default UserPage;