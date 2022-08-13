import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import proxy from '../security/Proxy.json'
import '../styles/sessions/FollowsSession.css'

function FollowList({ showFollowers, setShowFollowers, 
  follower, setFollower, following, setFollowing
}) {
// reFollow, setReqFollow, reqUnfollow, setReqFollow

    const nagative = useNavigate();

    const onClickProfile = (id) => {
      nagative(`/${id}`);
    }
    
    const toggleFollow = (idx) => {
    // axiosReqFollower();
    const followObject = follower[idx];
    followObject['followed'] = !follower[idx]['followed'];

    const tempData1 = follower.slice();
    tempData1[idx] = followObject;
    setFollower(tempData1);
    }

    const toggleFollowing = (idx) => {
      // axiosReqUnFollow();
      const followingObject = following[idx];
      followingObject['followed'] = !following[idx]['followed'];
  
      const tempData2 = following.slice();
      tempData2[idx] = followingObject;
      setFollowing(tempData2);
      }
  

    function showList(){
        const list = [];
        {console.log(follower['Member']);}
        // {console.log(follower['Member']);} //데이터 확인
        // {console.log(follower['Member'].length);} //데이터 확인 ['Member']
        // {console.log(following);} //데이터 확인
        // if(showFollowers === true){
            for(let i = 0; i < follower.length; i++){
                list.push(
                  <div className='FollowElement' key={i}>
                    <div className='followImg'>
                      <img className='profileImg'src={follower[i]['img']}
                      onClick={() => onClickProfile(follower[i]['name'])}
                      />
                      </div>
                      <div className='followName'
                      onClick={() => onClickProfile(follower[i]['name'])}
                      >
                      {follower[i]['name']}
                      </div>
                      {/* <div className='isFollowBox'>
                        <button className='followBtn' onClick={() => toggleFollow(i)}>
                          {follower[i]['followed'] ?'unfollow':'follow'}
                        </button>
                      </div> */}
                  </div>
                )
              // }
          }
        
        // else {
          for(let i = 0; i < following.length; i++){
            list.push(
              <div className='FollowElement' key={i}>
                <div className='followImg'>
                  <img className='profileImg'src={following[i]['src']}
                  onClick={() => onClickProfile(following[i]['id'])}
                  />
                  </div>
                  <div className='followName'
                  onClick={() => onClickProfile(following[i]['id'])}
                  >
                  {following[i]['name']}
                  </div>
                  <div className='isFollowBox'>
      
                    <button className='followBtn' onClick={() => toggleFollowing(i)}>
                      {following[i]['followed'] ?'unfollow':'follow'}
                    </button>
                  </div>
              </div>
            )
          }
        // }
        return list;
      }
    
  return (
    <div className='FollowsSession'>
      {showList()}
    </div>
  )
}

export default FollowList




  