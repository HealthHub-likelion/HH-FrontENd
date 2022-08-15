import '../styles/components/Header.css'
import MenuList from './MenuList';
import { useNavigate } from 'react-router-dom';
import proxy from '../security/Proxy.json'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

function Header({Tab, username, userData}) {
    const inputRef = useRef();
    const navigate = useNavigate();
    const token = localStorage.getItem('HH_token');

    const moveIndex = (state) =>{
      if(state==='logout'){
        if(window.confirm('로그아웃 하시겠습니까?')){
          localStorage.removeItem('HH_token');
          localStorage.removeItem('HH_member_id');
          localStorage.removeItem('HH_name');
          navigate(`/`);
        }
      }
      else{
        navigate(`/login`);
      }
    }

    const [inputName, setInputName] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [userList,setUserList] = useState('');

    const searchName = (e) =>{
      setInputName(e.target.value);
      if(inputName!==''){
        setShowDropDown(true);
      }
    }

    useEffect(()=>{
      const searchBox = document.querySelector('.header_top_search_input');
      searchBox.addEventListener('blur', ()=>{
        setShowDropDown(false);
      })
    },[])

    useEffect(()=>{
      axios.post(`${proxy['proxy_url']}/accounts/membersearchbynickname`,{
        nickname : 'test',
        headers:{
            Authorization : token
        }
      })
      .then((res)=>{
        // console.log(res);
        // setUserList(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    },[inputName]);

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
                {
                  localStorage.getItem('HH_token')&&localStorage.getItem('HH_name')&&localStorage.getItem('HH_member_id')
                  ?<button onClick={()=>{moveIndex('logout')}} >LogOut</button>
                  :<button onClick={()=>{moveIndex('login')}} >Login</button>
                }
                <div className='header_logo_left'>Health</div>
                <div className='header_logo_right'>Hub</div>
            </div>
        </div>
        <div className='header_bottom'>
            <div className='header_MenuList'>
                <MenuList Tab={Tab} username={username} userData={userData}/>
            </div>
        </div>
      </div>
    );
  }

  export default Header;