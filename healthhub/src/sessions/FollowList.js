import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/sessions/FollowsSession.css'

function FollowList({follower, setFollower, following, showFollowers, setShowFollowers}) {

  const nagative = useNavigate();

   const onClickProfile = (id) => {
    nagative(`/${id}`);
  }

  const isFollower = Object.keys(follower).length > 0;

  function followerList() {
    const list = [];
    if(!isFollower){
      return;
    }
    if(showFollowers === true){
      for(let i = 0; i < follower['Member'].length; i++){
        {console.log(follower['Member'][i]['name']);}
        list.push(
          <div className="FollowElement" key={i}>
            <div className="followImg">
              <img className="profileImg"
              src={follower['Member'][i]['img']}
              onClick={() => onClickProfile(follower['Member'][i]['name'])}>
              </img>
            </div>
            <div className="followName"
            onClick={() => onClickProfile(follower['Member'][i]['name'])}>
            {follower['Member'][i]['name']}
            </div>
          </div>
        )
      }        
    }
    else{
      for(let i = 0; i < following['Member'].length; i++){
        list.push(
          <div className="FollowElement" key={i}>
            <div className="followImg">
              <img className="profileImg"
              src={following['Member'][i]['img']}
              onClick={() => onClickProfile(following['Member'][i]['name'])}>
              </img>
            </div>
            <div className="followName"
            onClick={() => onClickProfile(following['Member'][i]['name'])}>
            {following['Member'][i]['name']}
            </div>
          </div>
        )
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




  