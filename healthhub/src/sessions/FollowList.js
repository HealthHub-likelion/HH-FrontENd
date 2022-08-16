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
  }

  //팔로우, 언팔로우 토글
  const toggleFollower = (idx) => {
    if(follower['Member'][idx]['isFollow'] === true){ // 버튼 unfollow -> follow
      axoisreqUnFollow(follower['Member'][idx]['name']);
    } else{ // 버튼 follow -> follow
      axiosreqFollow(follower['Member'][idx]['name']);
    }
    
    const followerObject = follower['Member'][idx];
    followerObject['isFollow'] = !follower['Member'][idx]['isFollow'];

    const tempData1 = follower['Member'].slice();
    tempData1[idx] = followerObject;
    setFollower({Member: tempData1});
  }

  const toggleFollowing = (idx) => {
    if(following['Member'][idx]['isFollow'] === true){
      axoisreqUnFollow(following['Member'][idx]['name']);
    } else{
      axiosreqFollow(following['Member'][idx]['name']);
    }

    const followingObject = following['Member'][idx];
    followingObject['isFollow'] = !following['Member'][idx]['isFollow'];

    const tempData2 = following['Member'].slice();
    tempData2[idx] = followingObject;
    setFollowing({Member: tempData2});
  }

  const token = localStorage.getItem('HH_token');

  const axiosreqFollow = (userName) =>{
    axios.post(`${proxy['proxy_url']}/accounts/member/follow`, {
      //바디 부분
      name: userName
    }, {
    headers: {
      Authorization: token
      }

    }).then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}

  const axoisreqUnFollow = (userName) => {
    axios.post(`${proxy['proxy_url']}/accounts/member/unfollow`, {
      //바디 부분
      name: userName
    }, {
    headers: {
      Authorization: token
      }
    })
    .then((res) => {
      console.log(res);

    }).catch((err) => {
      console.log(err);
    })
  }

  function followerList() {
    const list = [];
    if(showFollowers === true){
      if(follower['Member']) {
        for(let i = 0; i < follower['Member'].length; i++){
        list.push(
          <div className="FollowElement" key={i}>
            <div className="followImg">
              <img className="profileImg"
              src={`${proxy['proxy_url']}`+follower['Member'][i]['img']}
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
            </div>
          </div>
        )
      }  
      }
            
    }
    else{
      if(following['Member']) {
        // console.log(following['Member']);
        for(let i = 0; i < following['Member'].length; i++){
        list.push(
          <div className="FollowElement" key={i}>
            <div className="followImg">
              <img className="profileImg"
              src={`${proxy['proxy_url']}`+following['Member'][i]['img']}
              onClick={() => onClickProfile(following['Member'][i]['name'])}>
              </img>
            </div>
            <div className="followName"
            onClick={() => onClickProfile(following['Member'][i]['name'])}>
            {following['Member'][i]['name']}
            </div>
            <div className='isFollowBox'>
              <button className='followBtn' onClick={() => toggleFollowing(i)}>
              {following['Member'][i]['isFollow'] ?'unfollow':'follow'}
              </button>
            </div>
          </div>
          )
        }
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




  