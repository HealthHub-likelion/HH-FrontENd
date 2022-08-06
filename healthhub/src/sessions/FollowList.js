import React from 'react'
import { useNavigate} from 'react-router-dom';
import '../styles/sessions/FollowsSession.css'

function FollowList({data, setData}) {

    const nagative = useNavigate();

    const onClickProfile = (id) => {
      nagative(`/${id}`);
    }
    
    const toggleFollow = (idx) => {
    const followObject = data[idx];
    followObject['followed'] = !data[idx]['followed'];

    const tempData = data;
    tempData[idx] = followObject;
    setData(tempData);
    }

    function showList(){
        const list = [];
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
        return list;
      }
    
  return (
    <>
    {showList()}
    </>
  )
}

export default FollowList




  