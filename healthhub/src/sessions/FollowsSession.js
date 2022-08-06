import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/sessions/FollowsSession.css'
import FollowList from './FollowList';

function FollowsSession() {

    //임시 팔로우 데이터
    const [data, setData] = useState([{
      name: '구현우',
      id: 'GHWooo',
      src: 'https://avatars.githubusercontent.com/u/88186460?v=4',
      followed: true
    },
    {
      name: '콩대생',
      id: 'Miniling',
      src: 'https://avatars.githubusercontent.com/u/78603365?v=4',
      followed: true
    },
    {
      name: '오세찬',
      id: 'ledraco',
      src: 'https://avatars.githubusercontent.com/u/98178673?v=4',
      followed: true
    },
    {
      name: '수연',
      id: 'so0y',
      src: 'https://avatars.githubusercontent.com/u/83389222?v=4',
      followed: true
    }]);

    
  return (
    <div className='FollowsSession'>
      <FollowList data={data} setData={setData}/>
    </div>
  )
}

export default FollowsSession