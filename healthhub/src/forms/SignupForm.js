import '../styles/forms/SignupForm.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const navigate = useNavigate();

    const [alertComment,setAlertComment] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');
    const [passwordMatch,setPasswordMatch] = useState(false);

    const [isValid,setIsValid] = useState({
        nicknameValid : false,
        emailValid : false,
        passwordValid : false
    })

    const handlePassword = (e) => {setPassword(e.target.value)}
    const handlePassword2 = (e) => {setPassword2(e.target.value)}

    useEffect(()=>{
        if(password2.length == 0){
            setAlertComment('');
            setPasswordMatch(false);
        }
        else{
            if(password === password2){
                setAlertComment('');
                setPasswordMatch(true);
            }
            else{
                setAlertComment('* 비밀번호가 일치하지 않습니다!');
                setPasswordMatch(false);
            }
        }
    },[password,password2])

    
    function checkNickname(nickname){
        //영문자로 시작하는 영문자 또는 숫자 3자 이상
        const nickname_rule = /^[a-z]+[a-z0-9]{2}$/;
        if(nickname_rule.test(nickname)){
            setIsValid((prev)=>{
                return{...prev, nicknameValid : true}
            })
            return true;
        }
        else{
            setIsValid((prev)=>{
                return{...prev, nicknameValid : false}
            })
            return false;
        } 
    }

    function checkEmail(email){
        const email_rule = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if(email_rule.test(email)){
            return true;
        }
        else return false;
    }

    function checkPassword(password){
        //영어,숫자,특수문자 포함 8글자 이상 20글자 미만
        const pwd_rule = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,20}$/;
        if(pwd_rule.test(password)){
            return true;
        }
        else return false;
    }

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
                onChange={handlePassword}
                ></input>
            <input 
                type = "password"
                placeholder='password 중복 검사'
                className='signupForm_doubleCheck'
                onChange={handlePassword2}
                ></input>
            <div className='signupForm_passwordAlertBox'>
                <div className='signupForm_passwordAlert'>{alertComment}</div>
            </div>
            <div className='signupForm_signup'>Signup</div>
        </div>
    );
}

    export default SignupForm;