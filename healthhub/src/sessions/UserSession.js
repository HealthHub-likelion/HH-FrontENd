import '../styles/sessions/UserSession.css';
import ReadMeElement from '../components/elements/ReadMeElement';
import RoutinesElement from '../components/elements/RoutinesElement';
import WavesElement from '../components/elements/WavesElements';

function UserSession({userData, setUserData}) {
    return (
      <div className="UserSession">
        <div className='usersession_waves'>
          <WavesElement userData={userData}/>
        </div>
        <div className='usersession_readme'>
          <ReadMeElement userData={userData} setUserData={setUserData}/>
        </div>
        <div className='usersession_routines'>
          <RoutinesElement userData={userData}/>
        </div>
      </div>
    );
  }

  export default UserSession;