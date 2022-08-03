import ProfileContainer from '../components/background/ProfileBG';
import SignupHeader from '../components/SignupHeader';
import LoginForm from '../forms/LoginForm';
import '../styles/pages/LoginPage.css';

function LoginPage() {
  return (
    <ProfileContainer>
      <div className="LoginPage">
        <SignupHeader />
        <div className="login_form">
          <LoginForm />
          안나오나
        </div>
        <div className="login_bottom">
          <div>Sign Up</div>
        </div>
      </div>
    </ProfileContainer>
  );
}

export default LoginPage;