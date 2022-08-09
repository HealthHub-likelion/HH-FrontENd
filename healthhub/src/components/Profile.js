import '../styles/components/Profile.css'
import { useNavigate } from 'react-router-dom';
import proxy from '../security/Proxy.json'

function Profile({username, Tab, showFollowers, setShowFollowers}) {
    const navigate = useNavigate();

    const setFollowersClass = () => {
      return showFollowers?'profile_button_clicked':'profile_button';
    }
    const setFollowingClass = () => {
      return showFollowers?'profile_button':'profile_button_clicked';
    }

    return (
      <div className="Profile">
        <img src={`${proxy['proxy_url']}/media/images/HH_logo.jpg`} alt='프로필 이미지'/>
        <div className='profile_username'>{username}</div>
        {Tab === 'Follows'
        ? 
          <div className='profile_button_group'>
            <button className={setFollowersClass()} onClick={()=>{setShowFollowers(true)}}>0 followers</button> 
            / <button className={setFollowingClass()} onClick={()=>{setShowFollowers(false)}}>0 following</button>
          </div>
        : 
          <button className='profile_follow' onClick={()=>{navigate(`/${username}/follow`)}}>0 followers / 0 following</button>}
        
      </div>
    );
  }

  export default Profile;