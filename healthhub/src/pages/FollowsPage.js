import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/FollowsPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";
import FollowsSession from "../sessions/FollowsSession";

function FollowsPage() {
    const {username} = useParams();
    const [showFollowers, setShowFollowers] = useState(true);

    return (
      <div className="FollowsPage">
        <div className="followspage_header">
          <Header Tab={'Follows'} username={username}/>
        </div>
        <div className="followspage_content">
          <div className="followspage_profile">
            <ProfileSession username={username} Tab={'Follows'} 
                            showFollowers={showFollowers} setShowFollowers={setShowFollowers}/>
          </div>
          <div className="followspage_FollowsSession">
            <FollowsSession username={username}
                            showFollowers={showFollowers} setShowFollowers={setShowFollowers}/>
          </div>
        </div>
      </div>
    );
  }

  export default FollowsPage;