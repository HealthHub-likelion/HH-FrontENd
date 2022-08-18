import React from 'react';
import proxy from '../security/Proxy.json'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/components/SearchUser.css';

const SearchUser = () => {

    const navigate = useNavigate();

    const inputRef = useRef();
    const token = localStorage.getItem('HH_token');

    const [inputName, setInputName] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [userList,setUserList] = useState([]);

    const searchName = (e) =>{
        setInputName(e.target.value);
    }

    useEffect(()=>{
        if(inputName!==''){
            setShowDropDown(true);
        }
        else setShowDropDown(false);
    })

    useEffect(()=>{
    if(inputName !== ''){
        axios.post(`${proxy['proxy_url']}/accounts/membersearchbykeyword`,{
            keyword : inputName
        },{
            headers:{
                Authorization: token
            }
        })
        .then((res)=>{
            if(inputName == ''){
                setUserList([]);
            }
            setUserList([res.data.Member][0]);
        })
        .catch((err)=>{
            console.log(err);
            setUserList([]);
        })
    }
    else{
        setUserList([]);
    }
    },[inputName]);

    function moveToUser(userName){
        navigate(`/${userName}`)
    }

    useEffect(()=>{
        const container = document.querySelector('.SearchUser_top_search_dropdown');
        const serarchInput = document.querySelector('.SearchUser_top_search_input');
        document.addEventListener('mouseup', function(e) {
            if(container !== null){
                if (!container.contains(e.target)) {
                    container.style.display = 'none';
                }
            }
            if (serarchInput.contains(e.target)) {
                container.style.display = 'block';
            }
        });
    })

    return (
        <div className='SearchUser_top_box'>
            <div className='SearchUser_top_searchBox'>
                <input className='SearchUser_top_search_input' ref={inputRef} 
                value={inputName} onChange={searchName} placeholder='user name'/>
                <img alt='검색' src={`${proxy['proxy_url']}/media/images/HH_icon_search_name.png`}/>
            </div>
            {showDropDown && 
            <div className='SearchUser_top_search_dropdown'>                  
                {
                    userList.map((e,i)=>{
                        return(
                            <div className="notFound_userList" key = {i}
                                onClick={()=>{moveToUser(e.name)}}>  
                                <div className="notFound_userImgContainer">
                                    <img
                                        className="notFound_userImg"
                                        src = {`${proxy['proxy_url']}/media/${e.img}`}
                                    />
                                </div>
                                <div className="notFound_userName">{e.name}</div>
                            </div>
                        )
                    })
                }
            </div>}
        </div>
    );
};

export default SearchUser;