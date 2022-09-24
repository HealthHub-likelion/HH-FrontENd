import React from "react";
import ProfileContainer from "../components/background/ProfileBG";
import '../styles/pages/NotFoundPage.css'
import SearchUser2 from "../components/SearchUser2";

const NotFoundPage = () => {
    return (
        <ProfileContainer>
            <div className="NotFoundPage">
                <div className='notFound_top'>
                    <SearchUser2/>
                </div>
                <div className="NotFoundContainer">
                        <div className="NotFound_404">404</div>
                        <div className="NotFound_alert">User Not Found</div>
                </div>
            </div>
        </ProfileContainer>
    );
};

export default NotFoundPage;