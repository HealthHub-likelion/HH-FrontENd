import React from 'react'
import { useNavigate} from 'react-router-dom';
import '../styles/sessions/FollowsSession.css'

function FollowList({data, setData, showFollowers, setShowFollowers, following, setFollowing}) {

    const nagative = useNavigate();

    const onClickProfile = (id) => {
      nagative(`/${id}`);
    }
    
    const toggleFollow = (idx) => {
    const followObject = data[idx];
    followObject['followed'] = !data[idx]['followed'];

    const tempData1 = data.slice();
    tempData1[idx] = followObject;
    setData(tempData1);
    }

    const toggleFollowing = (idx) => {
      const followingObject = following[idx];
      followingObject['followed'] = !following[idx]['followed'];
  
      const tempData2 = following.slice();
      tempData2[idx] = followingObject;
      setData(tempData2);
      }
  

    function showList(){
        const list = [];
        if(showFollowers === true){
            for(let i = 0; i < data.length; i++){
                list.push(
                  <div className='FollowElement' key={i}>
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
                          {data[i]['followed'] ?'unfollow':'follow'}
                        </button>
                      </div>
                  </div>
                )
              }
        }
        else {
          for(let i = 0; i < following.length; i++){
            list.push(
              <div className='FollowElement' key={i}>
                <div className='followImg'>
                  <img className='profileImg'src={following[i]['src']}
                  onClick={() => onClickProfile(following[i]['id'])}
                  />
                  </div>
                  <div className='followName'
                  onClick={() => onClickProfile(following[i]['id'])}
                  >
                  {following[i]['name']}
                  </div>
                  <div className='isFollowBox'>
      
                    <button className='followBtn' onClick={() => toggleFollowing(i)}>
                      {following[i]['followed'] ?'unfollow':'follow'}
                    </button>
                  </div>
              </div>
            )
          }
        }
        return list;
      }
    
  return (
    <>
    {showList()}
    </>
  )
}

export default FollowList




  