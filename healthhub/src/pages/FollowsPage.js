import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import '../styles/pages/FollowsPage.css'
import Header from "../components/Header";
import axios from 'axios';
import proxy from '../security/Proxy.json'
import ProfileSession from "../sessions/ProfileSession";
import FollowsSession from "../sessions/FollowsSession";
import InitialData from "../components/InitialData";

function FollowsPage() {
    const {username} = useParams();
    const [userData, setUserData] = useState({});
    const [showFollowers, setShowFollowers] = useState(true);
    // true => followers, false => followings
    const [follower, setFollower] = useState([]); //팔로워 목록
    const [following, setFollowing] = useState([]); //팔로잉 목록

    const token = localStorage.getItem('HH_token');

    //팔로우 목록
    const axiosFollowers = () => {
      axios.get(`${proxy['proxy_url']}/accounts/member/follow?who=follower`,{
          headers:{
              Authorization: token 
          }
      })
      .then((res)=>{
          // console.log(res);
          setFollower(res.data);
      })
      .catch((err)=>{
          console.log(err);
      })
    }

    //팔로잉 목록
    const axiosFollowing = () => {
      axios.get(`${proxy['proxy_url']}/accounts/member/follow?who=following`,{
          headers:{
              Authorization: token 
          }
      })
      .then((res)=>{
          // console.log(res);
          setFollowing(res.data)
      })
      .catch((err)=>{
          console.log(err);
      })
    }

    useEffect(()=>{
      if(showFollowers === true){
        axiosFollowers();
      }
      else if(showFollowers === false){
        axiosFollowing();
      }
    },[showFollowers])


    return (
      <div className="FollowsPage">
        <div className="followspage_header">
          <Header Tab={'Follows'} username={username}/>
        </div>
        <div className="followspage_content">
          <div className="followspage_profile">
            <ProfileSession username={username} Tab={'Follows'} 
                            showFollowers={showFollowers} setShowFollowers={setShowFollowers}
                            userData={userData}/>
          </div>
          <div className="followspage_FollowsSession">
            <FollowsSession username={username}
                            showFollowers={showFollowers} setShowFollowers={setShowFollowers}
                            // showFollowings={showFollowings} setShowFollowings={setShowFollowings}
                            // data={data} setData={setData}
                            follower={follower} setFollower={setFollower}
                            following={following} setFollowing={setFollowing}
                            />
          </div>
        </div>

        <InitialData 
          username={username}
          setUserData={setUserData}
        />
      </div>
    );
  }

  export default FollowsPage;