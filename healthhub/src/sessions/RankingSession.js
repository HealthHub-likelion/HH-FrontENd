import axios from 'axios';
import React, {useEffect, useState} from 'react'
import RankingList from '../components/RankingList'
import '../styles/sessions/RankingSession.css'

function RankingSession({userData}) {

  const token = localStorage.getItem('HH_token');
  const [rank, setRank] = useState([]); //랭킹 목록

  //임시 데이터
  //팔로워 목록
  // const axiosFollower = () => {
  //   if(userData['name']){
  //     axios.get(`${process.env.REACT_APP_PROXY}/accounts/member/follow?who=follower&name=${userData['name']}`, {
  //       headers : {
  //         Authorization: token
  //       }
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setFollower(res.data);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     })
  //   }    
  // }

  // useEffect(() => {
  //   axiosFollower();
  // }, [userData]);

  //랭크유저 목록 (Top100)
  const axiosRank = () => {
    //if(userData['name']){
      axios.get(`${process.env.REACT_APP_PROXY}/accounts/member/ranking`, {
        headers : {
          Authorization: token
        }
      })
      .then((res) => {
        console.log(res);
        setRank(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    //}
  }

  useEffect(() => {
    axiosRank();
  }, {userData});


  return (
    <div className='RankingSession'>
      <RankingList
      rank={rank}
      setRank={setRank}
      // showFollowers={showFollowers}
      // follower={follower}
      // setFollower={setFollower}
      // following={following}
      // setFollowing={setFollowing}
      // userData={userData}
      // setUserData={setUserData}
      />
    </div>
  )
}

export default RankingSession
