import React, { useState } from 'react'
import '../styles/sessions/FollowsSession.css'

function FollowsSession() {
    
    const followList = ['구현우', '백승민', '오세찬', '임수연', 'Frontend'];

    const [follow, setFollow] = useState();

    const onUnFollow = () => {
        setFollow(false);
    }

    const onFollow = () => {
        setFollow(true);
    }

    function showList() {
      const nameList = followList.map((name) => (
        <div className='FollowElement'>
            <div className='followImg'>
              <img className='profileImg'src='https://avatars.githubusercontent.com/u/83389222?v=4'/>
            </div>
            <div className='followName'>
              {name}
            </div>
            <div className='isFollowBox'>
                {follow ?
                 <button className='followBtn' onClick={onUnFollow}>unfollow</button>
                 : <button className='followBtn' onClick={onFollow}>follow</button>
                }
            </div>
        </div>
      ))
      return nameList;
    }

  return (
    <div className='FollowsSession'>
      {showList()}
    </div>
  )
}

export default FollowsSession
