import NickNameForm from "../forms/NickNameForm";
import ProfileImageForm from "../forms/ProfileImageForm";
import SecurityForm from "../forms/SecurityForm";
import StatusForm from "../forms/StatusForm";
import '../styles/sessions/SettingsSession.css';

function SettingsSession({ username, dataPrivate, setdataPrivate, userData }) {

    return (
        <div className="SettingsSession">
            <div className="settingssession_nickname">
                <NickNameForm username={username} userData={userData} />
            </div>
            <div className="settingssession_profileimage">
                <ProfileImageForm userData={userData} />
            </div>
            <div className="settingssession_security">
                <SecurityForm dataPrivate={dataPrivate} setdataPrivate={setdataPrivate} />
            </div>
            <div className="settingssession_status">
                <StatusForm />
            </div>
        </div>
    )
}

export default SettingsSession;