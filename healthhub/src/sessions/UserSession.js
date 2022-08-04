import '../styles/sessions/UserSession.css';
import ReadMeElement from '../components/elements/ReadMeElement';
import RoutinesElement from '../components/elements/RoutinesElement';
import WavesElement from '../components/elements/WavesElements';

function UserSession() {
    return (
      <div className="UserSession">
        <div className='usersession_readme'>
          <ReadMeElement/>
        </div>
        <div className='usersession_routines'>
          <RoutinesElement/>
        </div>
        <div className='usersession_waves'>
          <WavesElement/>
        </div>
      </div>
    );
  }

  export default UserSession;