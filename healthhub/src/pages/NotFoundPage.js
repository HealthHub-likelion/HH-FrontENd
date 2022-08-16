import React from "react";
import ProfileContainer from "../components/background/ProfileBG";
import '../styles/pages/NotFoundPage.css'
import proxy from '../security/Proxy.json'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

    const inputRef = useRef();
    const navigate = useNavigate();
    const token = localStorage.getItem('HH_token');

    const [inputName, setInputName] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [userList,setUserList] = useState('');

    const searchName = (e) =>{
        setInputName(e.target.value);
        if(inputName!==''){
            setShowDropDown(true);
        }
    }

    useEffect(()=>{
        const searchBox = document.querySelector('.notFound_top_search_input');
        searchBox.addEventListener('blur', ()=>{
        setShowDropDown(false);
    })
    },[])

    useEffect(()=>{
        axios.post(`${proxy['proxy_url']}/accounts/membersearchbynickname`,{
        nickname : 'test',
        headers:{
            Authorization : token
        }
    })
    .then((res)=>{
        //console.log(res);
        // setUserList(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    },[inputName]);

    const clickLogo = () =>{
        if(localStorage.getItem('HH_name')){
            navigate(`/${localStorage.getItem('HH_name')}`);
            return
        }
        navigate(`/`);
    }

    return (
        <ProfileContainer>
            <div className="NotFoundPage">
                <div className='notFound_top'>
                    <div className='notFound_top_box'>
                        <div className='notFound_top_searchBox'>
                            <input className='notFound_top_search_input' ref={inputRef} 
                                value={inputName} onChange={searchName} placeholder='user name'/>
                            <img alt='검색' src={`${proxy['proxy_url']}/media/images/HH_icon_search_name.png`}/>
                        </div>
                        {showDropDown && 
                        <div className='notFound_top_search_dropdown'>                  
                            
                        </div>}
                        <div className='notFound_box' onClick={()=>{clickLogo()}}>
                            <div className='notFound_logo_left'>Health</div>
                            <div className='notFound_logo_right'>Hub</div>
                        </div>
                    </div>
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