import React, { useEffect, useState } from 'react'
import axios from 'axios';
import proxy from '../security/Proxy.json'
import FollowList from './FollowList';

function FollowsSession({showFollowers}) {

    const [follower, setFollower] = useState([]); //팔로워 목록
    const [following, setFollowing] = useState([]); //팔로잉 목록
    const token = localStorage.getItem('HH_token');

    //팔로워 목록
    const axiosFollower = () => {
      axios.get(`${proxy['proxy_url']}/accounts/member/follow?who=follower`, {
        headers : {
          Authorization: token
        }
      })
      .then((res) => {
        console.log(res);
        setFollower(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    //팔로잉 목록
    const axiosFollowing = () => {
      axios.get(`${proxy['proxy_url']}/accounts/member/follow?who=following`, {
        headers : {
          Authorization: token
        }
      })
      .then((res) => {
        console.log(res);
        setFollowing(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    } 

    useEffect(() => {
      axiosFollower();
      axiosFollowing();
    }, []);

  return (
    <div className='FollowsSession'>
      <FollowList
      follower={follower}
      setFollower={setFollower}
      following={following}
      setFollowing={setFollowing}
      showFollowers={showFollowers}
      />
    </div>
  )
}

export default FollowsSession