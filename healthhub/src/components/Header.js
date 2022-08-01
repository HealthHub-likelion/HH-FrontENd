import '../styles/components/Header.css'
import MenuList from './MenuList';
import { useNavigate } from 'react-router-dom';

function Header({Tab}) {
    const navigate = useNavigate();

    const moveIndex = () =>{
      // 후에 토큰 삭제 부분 추가 필요
      if(window.confirm('로그아웃 하시겠습니까?')){
        navigate(`/`);
      }
    }

    return (
      <div className="Header">
        <div className='header_top'>
            <div className='header_top_box'>
                <button onClick={()=>{moveIndex()}} >LogOut</button>
                <div className='header_logo_left'>Health</div>
                <div className='header_logo_right'>Hub</div>
            </div>
        </div>
        <div className='header_bottom'>
            <div className='header_MenuList'>
                <MenuList Tab={Tab}/>
            </div>
        </div>
      </div>
    );
  }

  export default Header;