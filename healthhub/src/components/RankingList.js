import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../styles/sessions/RankingSession.css';

function RankingList({ rank, setRank }) {

  //페이지 이동
  const nagative = useNavigate();
  const onClickProfile = (id) => {
    nagative(`/${id}`);
  }

  // //팔로우, 언팔로우 토글
  // const toggleFollower = (idx) => {
  //   if (userData.followingCount > -1 && userData.followerCount > -1) {
  //     if (follower['Member'][idx]['isFollow'] === true) { // 버튼 unfollow -> follow
  //       axoisreqUnFollow(follower['Member'][idx]['name']);
  //       setUserData({ ...userData, followingCount: userData.followingCount - 1 });
  //     } else { // 버튼 follow -> unfollow
  //       axiosreqFollow(follower['Member'][idx]['name']);
  //       setUserData({ ...userData, followingCount: userData.followingCount + 1 });
  //     }
  //   }

  //   const followerObject = follower['Member'][idx];
  //   followerObject['isFollow'] = !follower['Member'][idx]['isFollow'];

  //   const tempData1 = follower['Member'].slice();
  //   tempData1[idx] = followerObject;
  //   setFollower({ Member: tempData1 });
  // }

  // const toggleFollowing = (idx) => {

  //   if (following['Member'][idx]['isFollow'] === true && userData.followingCount > -1 && userData.followerCount > -1) {
  //     axoisreqUnFollow(following['Member'][idx]['name']);
  //     setUserData({ ...userData, followingCount: userData.followingCount - 1 });
  //   }
  //   else{
  //     axiosreqFollow(following['Member'][idx]['name']);
  //     setUserData({...userData, followerCount: userData.followerCount+1});
  //   }

  //   const followingObject = following['Member'][idx];
  //   followingObject['isFollow'] = !following['Member'][idx]['isFollow'];

  //   const tempData2 = following['Member'].slice();
  //   tempData2[idx] = followingObject;
  //   setFollowing({ Member: tempData2 });
  // }

  // const token = localStorage.getItem('HH_token');

  // const axiosreqFollow = (userName) => {
  //   axios.post(`${process.env.REACT_APP_PROXY}/accounts/member/follow`, {
  //     //바디 부분
  //     name: userName
  //   }, {
  //     headers: {
  //       Authorization: token
  //     }

  //   }).then((res) => {
  //   })
  //     .catch((err) => {
  //       // console.log(err);
  //     })
  // }

  // const axoisreqUnFollow = (userName) => {
  //   window.confirm("unfollow 하시겠습니까?");
  //   axios.post(`${process.env.REACT_APP_PROXY}/accounts/member/unfollow`, {
  //     //바디 부분
  //     name: userName
  //   }, {
  //     headers: {
  //       Authorization: token
  //     }
  //   })
  //     .then((res) => {

  //     }).catch((err) => {
  //       // console.log(err);
  //     })
  // }

  

  function RankList() {
    const list = [];
      if (rank['results']) {
        for (let i = 0; i < rank['results'].length; i++) {
          list.push(
          <div className='RankingElement'key={i}>
            <div className='Ranking'>
              {i+1}위
            </div>
            <div className='RankingImg'>
                <img className="profileImg"
                  src={`${process.env.REACT_APP_IMAGE}` + rank['results'][i]['img']}
                  onClick={() => onClickProfile(rank['results'][i]['nickname'])}>
                </img>
              </div>
              <div className='RankingName'
                onClick={() => onClickProfile(rank['results'][i]['nickname'])}>
                {rank['results'][i]['nickname']}
              </div>
            </div>
          )
        }
      }
    return list;
  }

  return (
    <div className='RankList'>
      {RankList()}
    </div>
  )
}

export default RankingList
