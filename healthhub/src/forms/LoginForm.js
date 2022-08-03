import '../styles/forms/LoginForm.css'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    return (
        <div className="LoginForm">
            <div className='loginform_email'>
                <input placeholder='이메일'></input>
            </div>
            <input
                type="password"
                placeholder='password'
                className='loginform_password'
            ></input>
            <div className='loginform_login'>Login</div>
        </div>
    );
}

export default LoginForm;