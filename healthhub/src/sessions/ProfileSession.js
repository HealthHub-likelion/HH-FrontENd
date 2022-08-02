import '../styles/sessions/ProfileSession.css';
import ProfileContainer from '../components/background/ProfileBG';
import Profile from '../components/Profile';

function ProfileSession({username, Tab, showFollowers, setShowFollowers}) {
    return (
        <ProfileContainer>
            <div className="ProfileSession">
                <div className="profilesession_profile">
                    <Profile username={username} Tab={Tab}
                            showFollowers={showFollowers} setShowFollowers={setShowFollowers}/>
                </div>
            </div>
        </ProfileContainer>
    );
  }

  export default ProfileSession;