import React, { useEffect, useState } from 'react'
import axios from 'axios';
import proxy from '../security/Proxy.json'
import FollowList from './FollowList';

function FollowsSession({username, showFollowers, setShowFollowers, follower, setFollower, following, setFollowing}) {
  // const [reqFollow, setReqFollow] = useState([]); //팔로우 요청
  // const [reqUnfollow, setReqUnfollow] = useState([]); //언팔로우 요청

  // console.log(reqFollow);

  //팔로우 요청
  // const axiosReqFollower = () => {
  //   axios.post(`${proxy['proxy_url']}/accounts/member/follow`,{
  //     name: "",
  //     // followed: 'follow'
  //   },{
  //       headers:{
  //           Authorization: token 
  //       }
  //   })
  //   .then((res)=>{
  //       console.log(res);
  //       setReqFollow(res.data)
  //   })
  //   .catch((err)=>{
  //       console.log(err);
  //   })
  // }

  //언팔로우 요청
  // const axiosReqUnFollow = () => {
  //   axios.delete(`${proxy['proxy_url']}/accounts/member/follow`, {
  //     name: ""
  //     // followed : 'unfollow'
  //   })
  //   .then((res)=>{
  //       console.log(res);
  //       setReqUnfollow(res.data)
  //   })
  //   .catch((err)=>{
  //       console.log(err);
  //   })
  // }

  // useEffect(()=> {
    // axiosReqFollower();
    // axiosReqUnFollow();
  // }, [])


  return (
    <div className='FollowsSession'>
      <FollowList //data={data} setData={setData} 
      showFollowers={showFollowers} setShowFollowers={setShowFollowers}
      follower={follower} setFollower={setFollower}
      following={following} setFollowing={setFollowing}
      // reqFollow={reqFollow} setReqFollow={setReqFollow} //팔로우 요청
      // reqUnfollow={reqUnfollow} setReqUnfollow={setReqUnfollow} //언팔로우 요청
      />
    </div>
  )
}

export default FollowsSession