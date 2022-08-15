import React, { useState, useEffect } from 'react'
import axios from 'axios';
import proxy from '../security/Proxy.json'
import { useNavigate } from 'react-router-dom';
import '../styles/sessions/FollowsSession.css'

function FollowList({follower, setFollower, following, setFollowing, showFollowers}) {

  //페이지 이동
  const nagative = useNavigate();
  const onClickProfile = (id) => {
    nagative(`/${id}`);
    // axiosreqFollow();
  }

  const toggleFollower = (idx) => {
    const followerObject = follower['Member'][idx];
    followerObject['isFollow'] = !follower['Member'][idx]['isFollow'];

    const tempData1 = follower['Member'].slice();
    tempData1[idx] = followerObject;
    setFollower(tempData1);
    // axiosreqFollow();
    }

  const isFollower = Object.keys(follower).length > 0;
  const isFollowing = Object.keys(following).length > 0;

  const token = localStorage.getItem('HH_token');

//   const axiosreqFollow = () =>{
//     axios.post(`${proxy['proxy_url']}/accounts/member/follow/`, {
//       //바디 부분
//       name: "nickname"
//     }, {
//     headers: {
//       Authorization: token
//       }

//     }).then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

//   const data = {
//     name: "nickname"
//   }

//   const axoisreqUnFollow = () => {
//     axios.delete(`${proxy['proxy_url']}/accounts/member/follow`, {
//       data,
//       headers: {
//       Authorization: token
//       }
//     })
//     .then((res) => {
//       console.log(res);

//     }).catch((err) => {
//       console.log(err);
//     })
//   }

//   useEffect(() => {
//     axiosreqFollow();
//     axoisreqUnFollow();
//   }, []);

  function followerList() {
    const list = [];
    console.log(isFollower)
    if(showFollowers === true){
      // if(!isFollower){
      //   return;
      // }
      if(follower['Member']) {
        for(let i = 0; i < follower['Member'].length; i++){
        list.push(
          <div className="FollowElement" key={i}>
            <div className="followImg">
              <img className="profileImg"
              src={follower['Member'][i]['img']}
              onClick={() => onClickProfile(follower['Member'][i]['name'])}>
              </img>
            </div>
            <div className="followName"
            onClick={() => onClickProfile(follower['Member'][i]['name'])}>
            {follower['Member'][i]['name']}
            </div>
            <div className='isFollowBox'>
              <button className='followBtn' onClick={() => toggleFollower(i)}>
              {follower['Member'][i]['isFollow'] ?'unfollow':'follow'}
              </button>
              {/* {console.log(follower['Member'][i]['isFollow'])} */}
            </div>
          </div>
        )
      }  
      }
            
    }
    else{
      if(!isFollowing){
        return;
      }
      for(let i = 0; i < following['Member'].length; i++){
        list.push(
          <div className="FollowElement" key={i}>
            <div className="followImg">
              <img className="profileImg"
              src={following['Member'][i]['img']}
              onClick={() => onClickProfile(following['Member'][i]['name'])}>
              </img>
            </div>
            <div className="followName"
            onClick={() => onClickProfile(following['Member'][i]['name'])}>
            {following['Member'][i]['name']}
            </div>
          </div>
        )
      } 
    }
    return list;
  }

  return (
    <div className='FollowList'>
      {followerList()}
    </div>
  )
}

export default FollowList




  