import '../styles/components/Header.css'
import MenuList from './MenuList';
import { useNavigate } from 'react-router-dom';
import proxy from '../security/Proxy.json'
import { useEffect, useRef, useState } from 'react';

function Header({Tab, username}) {
    const inputRef = useRef();
    const navigate = useNavigate();

    const moveIndex = () =>{
      // 후에 토큰 삭제 부분 추가 필요
      if(window.confirm('로그아웃 하시겠습니까?')){
        navigate(`/`);
      }
    }

    const [inputName, setInputName] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);

    const searchName = (e) =>{
      setInputName(e.target.value);
    }

    useEffect(()=>{
      const searchBox = document.querySelector('.header_top_search_input');

      searchBox.addEventListener('click', ()=>{
        setShowDropDown(true);
      })
      searchBox.addEventListener('blur', ()=>{
        setShowDropDown(false);
      })
    })

    useEffect(()=>{
      if(inputName !== '') setShowDropDown(true);
    },[inputName])

    return (
      <div className="Header">
        <div className='header_top'>
            <div className='header_top_box'>
                <div className='header_top_searchBox'>
                  <input className='header_top_search_input' ref={inputRef} 
                          value={inputName} onChange={searchName} placeholder='user name'/>
                  <img alt='검색' src={`${proxy['proxy_url']}/media/images/HH_icon_search_name.png`}/>
                </div>
                {showDropDown && 
                <div className='header_top_search_dropdown'>
                
                </div>}
                <button onClick={()=>{moveIndex()}} >LogOut</button>
                <div className='header_logo_left'>Health</div>
                <div className='header_logo_right'>Hub</div>
            </div>
        </div>
        <div className='header_bottom'>
            <div className='header_MenuList'>
                <MenuList Tab={Tab} username={username}/>
            </div>
        </div>
      </div>
    );
  }

  export default Header;