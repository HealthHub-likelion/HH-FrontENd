import '../styles/components/Profile.css'
import { useNavigate } from 'react-router-dom';
import proxy from '../security/Proxy.json'
import CreateRecordModal from './modals/CreateRecordModal';
import { useState } from 'react';

function Profile({username, Tab, showFollowers, setShowFollowers, userData}) {
    const navigate = useNavigate();
    const [showAddRecord, setShowAddRecord] = useState(false);

    const setFollowersClass = () => {
      return showFollowers?'profile_button_clicked':'profile_button';
    }
    const setFollowingClass = () => {
      return showFollowers?'profile_button':'profile_button_clicked';
    }

    const selectFollowState = () =>{
      if(userData.isFollow === null || userData.isOpen === true){
        return <button className='profile_follow' onClick={()=>{navigate(`/${username}/follow`)}}>
          {userData.followerCount} followers / {userData.followingCount} following
          </button>;
      }
      return <div className='profile_follow'>{userData.followerCount} followers / {userData.followingCount} following</div>;
    }

    return (
      <div className="Profile">
        <img src={`${proxy['proxy_url']}/media/images/HH_logo.jpg`} alt='프로필 이미지'/>
        <div className='profile_userstate_box'>
          <div className='profile_username'>{username}</div>
          {userData.isFollow===null||
            userData.isFollow
            ?<button className='profileBtn_unfollow'>unfollow</button>:<button className='profileBtn_following'>following</button>
          }
        </div>
        {Tab === 'Follows'
        ? 
          <div className='profile_button_group'>
            <button className={setFollowersClass()} onClick={()=>{setShowFollowers(true)}}>{userData.followerCount} followers</button> 
            / <button className={setFollowingClass()} onClick={()=>{setShowFollowers(false)}}>{userData.followingCount} following</button>
          </div>
        :selectFollowState()}
        {userData.isFollow===null&&
        <div className='profile_add_record_box'>
          <button className='profile_add_record' onClick={()=>{setShowAddRecord(true)}}>Add Record</button>
        </div>
        }

        <CreateRecordModal
          show={showAddRecord}
          onHide={()=>{setShowAddRecord(false)}}
        />
      </div>
    );
  }

  export default Profile;