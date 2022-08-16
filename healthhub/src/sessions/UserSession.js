import '../styles/sessions/UserSession.css';
import ReadMeElement from '../components/elements/ReadMeElement';
import RoutinesElement from '../components/elements/RoutinesElement';
import WavesElement from '../components/elements/WavesElements';
import proxy from '../security/Proxy.json';

function UserSession({userData, setUserData}) {
    return (
      <div className="UserSession">
        {userData['isFollow']!==null && userData['isOpen']===false
        ?<div className='usersession_private'>
          <img alt='잠금' src={`${proxy['proxy_url']}/media/images/icons/HH_icon_security.png`}/>
          <div>private user</div>
        </div>
        :<>
          <div className='usersession_waves'>
            <WavesElement userData={userData}/>
          </div>
          <div className='usersession_readme'>
            <ReadMeElement userData={userData} setUserData={setUserData}/>
          </div>
          <div className='usersession_routines'>
            <RoutinesElement userData={userData} setUserData={setUserData}/>
          </div>
        </>}
      </div>
    );
  }

  export default UserSession;