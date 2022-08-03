import NickNameForm from "../forms/NickNameForm";
import ProfileImageForm from "../forms/ProfileImageForm";
import SecurityForm from "../forms/SecurityForm";
import StatusForm from "../forms/StatusForm";
import '../styles/sessions/SettingsSession.css';

function SettingsSession({ username }) {

    return (
        <div className="SettingsSession">
            <div className="settingssession_nickname">
                <NickNameForm username={username} />
            </div>
            <div className="settingssession_profileimage">
                <ProfileImageForm />
            </div>
            <div className="settingssession_security">
                <SecurityForm />
            </div>
            <div className="settingssession_status">
                <StatusForm />
            </div>
        </div>
    )
}

export default SettingsSession;