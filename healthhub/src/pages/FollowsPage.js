import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/FollowsPage.css'
import Header from "../components/Header";

function FollowsPage() {
    const {username} = useParams();

    return (
      <div className="FollowsPage">
        <div className="followspage_header">
          <Header Tab={'Follows'}/>
        </div>
        <div className="followspage_content">
          <div className="followspage_profile">
          프로필 세션
          </div>
          <div className="followspage_FollowsSession">
          {/* 구현한 FollowsSession 여기에 넣으면 됩니다. */}
          </div>
        </div>
      </div>
    );
  }

  export default FollowsPage;