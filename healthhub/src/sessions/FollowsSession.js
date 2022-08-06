import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/sessions/FollowsSession.css'

function FollowsSession() {

    /*프로필, 이름클릭시 해당 유저페이지로 이동*/
    const nagative = useNavigate();

    const onClickProfile = (id) => {
      nagative(`/${id}`);
    }

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

    const toggleFollow = (idx) => {
      const followObject = data[idx];
      followObject = {...data[idx], followed: !data[idx]['followed']};

      const tempData = data;
      tempData[idx] = followObject;
      setData(tempData);
  }

    // console.log(isFollow)
    function showList(){
      const list = [];
      for(let i = 0; i < data.length; i++){
        list.push(
          <div className='FollowElement'>
            <div className='followImg'>
              <img className='profileImg'src={data[i]['src']}
              onClick={() => onClickProfile(data[i]['id'])}
              />
              </div>
              <div className='followName'
              onClick={() => onClickProfile(data[i]['id'])}
              >
              {data[i]['name']}
              </div>
              <div className='isFollowBox'>

                <button className='followBtn' onClick={() => toggleFollow(i)}>
                  {data[i]['followed']?'unfollow':'follow'}
                </button>
              </div>
          </div>
        )
      }
      return list;
    }
    
  return (
    <div className='FollowsSession'>
      {showList()}
    </div>
  )
}

export default FollowsSession