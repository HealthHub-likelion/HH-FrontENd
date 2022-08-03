import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/RecordsPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";

function RecordsPage() {
    const {username} = useParams();

    return (
      <div className="RecordsPage">
        <div className="recordspage_header">
          <Header Tab={'Records'} username={username}/>
        </div>
        <div className="recordspage_content">
          <div className="recordspage_profile">
            <ProfileSession username={username}/>
          </div>
          <div className="recordspage_RecordsSession">
          {/* 구현한 RecordsSession 여기에 넣으면 됩니다. */}
          </div>
        </div>
      </div>
    );
  }

  export default RecordsPage;