import '../styles/pages/IndexPage.css';
import { useNavigate } from 'react-router-dom';
import IndexContainer from "../components/background/indexBG";

function IndexPage() {
    const navigate = useNavigate();

    const moveLoginPage = () =>{
        navigate(`/login`);
    }
    const moveSignupPage = () =>{
        navigate(`/signup`);
    }

    return (
        <IndexContainer>
            <div className="IndexPage">
                <div className="index_top">
                    <div className="index_top_title">
                        <div className="index_top_title_right">Health</div>
                        <div className="index_top_title_left">Hub</div>
                    </div>
                    <div className="index_top_slogan">
                        물결을 일으켜, 파도를 만드세요.
                    </div>
                </div>
                <div className="index_bottom">
                    <button className="index_loing_button"
                            onClick={()=>{moveLoginPage()}}>Login</button>
                    <button className="index_signup_button"
                            onClick={()=>{moveSignupPage()}}>Signup</button>
                </div>
            </div>
        </IndexContainer>
    );
  }

  export default IndexPage;