import React, { useState } from 'react'
import FollowList from './FollowList';

function FollowsSession({showFollowers, setShowFollowers, showFollowings, setShowFollowings}) {

    //임시 팔로워 데이터
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

    //임시 팔로잉 데이터
    const [following, setFollowing] = useState([{
      name: 'Jeon_minGyu',
      id: 'DrHagha',
      src: 'https://avatars.githubusercontent.com/u/77195428?v=4'
    },
    {
      name: 'Yong Hyun Jeon',
      id: 'Raccooon98',
      src: 'https://avatars.githubusercontent.com/u/101920006?v=4',
      followed: false
    },
    {
      name: '김성은',
      id: 'star-sil',
      src: 'https://avatars.githubusercontent.com/u/70811575?v=4',
      followed: false
    },{
      name: '최영민',
      id: 'youngmin1006',
      src: 'https://avatars.githubusercontent.com/u/67896917?v=4',
      followed: false
    }
    ]);

  
    
  return (
    <div className='FollowsSession'>
      <FollowList data={data} setData={setData} showFollowers={showFollowers} setShowFollowers={setShowFollowers}
      following={following} setFollowing={setFollowing}/>
    </div>
  )
}

export default FollowsSession