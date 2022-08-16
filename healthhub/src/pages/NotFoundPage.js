import React from "react";
import ProfileContainer from "../components/background/ProfileBG";
import SignupHeader from "../components/SignupHeader";
import '../styles/pages/NotFoundPage.css'
import proxy from '../security/Proxy.json'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    
    return (
        <ProfileContainer>
            <div className="NotFoundPage">
                <SignupHeader/>
                <div className="NotFoundContainer">
                    <div className="NotFound_404">404</div>
                    <div className="NotFound_alert">Not Found User</div>
                </div>
            </div>
        </ProfileContainer>
    );
};

export default NotFoundPage;