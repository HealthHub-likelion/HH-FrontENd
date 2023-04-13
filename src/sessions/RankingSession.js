import axios from 'axios';
import React, {useEffect, useState} from 'react'
import RankingList from '../components/RankingList'
import '../styles/sessions/RankingSession.css'

function RankingSession({userData}) {

  const token = localStorage.getItem('HH_token');
  const [rank, setRank] = useState([]); //랭킹 목록

  //랭크유저 목록
  const axiosRank = () => {
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
  }

  useEffect(() => {
    axiosRank();
  }, {userData});


  return (
    <div className='RankingSession'>
      <RankingList
      rank={rank}
      setRank={setRank}
      />
    </div>
  )
}

export default RankingSession
