import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/FeedsPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";
import FeedsSession from "../sessions/FeedsSession";
function FeedsPage() {
    const {username} = useParams();

    return (
      <div className="FeedsPage">
        <div className="feedspage_header">
          <Header Tab={'Feeds'} username={username}/>
        </div>
        <div className="feedspage_content">
          <div className="feedspage_profile">
            <ProfileSession username={username}/>
          </div>
          <div className="feedspage_FeedsSession">
            <FeedsSession/>
          </div>
        </div>
      </div>
    );
  }

  export default FeedsPage;