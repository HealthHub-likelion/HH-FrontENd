import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import proxy from '../security/Proxy.json'
import FollowList from './FollowList';

function FollowsSession({username, showFollowers, setShowFollowers}) {

    const [follower, setFollower] = useState([]);
    const [following, setFollowing] = useState([]);
    const token = localStorage.getItem('HH_token');

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
      follower={follower} setFollower={setFollower}
      following={following} setFollowing={setFollowing}
      showFollowers={showFollowers} setShowFollowers={setShowFollowers}
      />
    </div>
  )
}

export default FollowsSession