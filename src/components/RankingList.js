import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../styles/sessions/RankingSession.css';

function RankingList({ rank, setRank }) {

  //페이지 이동
  const nagative = useNavigate();
  const onClickProfile = (id) => {
    nagative(`/${id}`);
  }



  function RankList() {
    const list = [];
      if (rank['results']) {
        for (let i = 0; i < rank['results'].length; i++) {
          list.push(
            <>
            <div className='medal'>{i+1 === 1 ? '🥇' : i+1 === 2 ? '🥈' : i+1 === 3 ? '🥉' : ''}</div>
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
            </>
          
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
