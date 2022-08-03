import '../styles/forms/SignupForm.css'
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const navigate = useNavigate();

    return (
        <div className="SignupForm">
            <div className='signupForm_nickname'>
                <input 
                    placeholder='닉네임'>
                </input>
                <div>확인</div>
            </div>
            <div className='signupForm_email'>
                <input placeholder='이메일'></input>
                <div>확인</div>
            </div>
            <input 
                type = "password"
                placeholder='password'
                className='singupForm_password'
                ></input>
            <input 
                type = "password"
                placeholder='password 중복 검사'
                className='signupForm_doubleCheck'
                ></input>
            <div className='signupForm_signup'>Signup</div>
        </div>
    );
}

    export default SignupForm;