import React from 'react';
import WaveElement from '../components/WaveElement';
import '../styles/sessions/PopularSession.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

const PopularSession = ({userData, setUserData}) => {
    const [popular_myList,setMyList] = useState([]);
    const token = localStorage.getItem('HH_token');
    
    const axiosPopular = () =>{
        axios.get(`${process.env.REACT_APP_PROXY}/record/followinglist/`,{
            headers:{
                Authorization : token
            }
        })
        .then((res)=>{
            // console.log(res);
            setMyList(res.data);
        })
        .catch((err)=>{
            // console.log(err);
        })
    }

    useEffect(()=>{
        axiosPopular();
    },[]);

    function getDate(create_time){
        const getCreate_time = create_time.substr(0,10);
        return getCreate_time;
    }

    function latest(popular_myList){
        const latestList = [...popular_myList];
        latestList.sort((a,b)=>{
            return b.record_id - a.record_id;
        })
        return latestList;
    }

    return (
        <div className='PopularSession'>
            {popular_myList.length>0 ?
                latest(popular_myList).map((e,i)=>{
                    return(
                        <WaveElement
                        userData={userData} 
                        setUserData={setUserData}
                        key = {i}
                        record_img = {e.record_img}
                        routine_name = {e.routine_name}
                        create_time = {getDate(e.record_create_time)}
                        comment = {e.record_comment}
                        member_nickname = {e.member_nickname}
                        member_img = {e.member_img}
                        isOpen={e.routine_isOpen}
                        routineId = {e.routine_id}
                        pre='wave'
                        />
                    )
                })
                :<div className='popular_empty'>게시물이 비었네요...</div>
            }
        </div>
    );
};

export default PopularSession;