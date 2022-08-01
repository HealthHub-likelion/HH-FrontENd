import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/FeedsPage.css'
import Header from "../components/Header";

function FeedsPage() {
    const {username} = useParams();

    return (
      <div className="FeedsPage">
        <div className="feedspage_header">
          <Header Tab={'Feeds'}/>
        </div>
        <div className="feedspage_content">
          <div className="feedspage_profile">
          프로필 세션
          </div>
          <div className="feedspage_FeedsSession">
          {/* 구현한 FeedsSession 여기에 넣으면 됩니다. */}
          </div>
        </div>
      </div>
    );
  }

  export default FeedsPage;