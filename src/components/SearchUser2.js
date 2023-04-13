// 작성자 : 오세찬
import React from 'react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import '../styles/components/SearchUser2.css';

const SearchUser = () => {

    const navigate = useNavigate();

    // 현위치 확인
    const location = useLocation();
    const pageLocation = location.pathname.split("/")[1];

    const inputRef = useRef();
    const token = localStorage.getItem('HH_token');

    const [inputName, setInputName] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [userList, setUserList] = useState([]);

    // 로그아웃 여부 결정 함수
    const moveIndex = (state) => {
        if (state === 'logout') {
            if (window.confirm('로그아웃 하시겠습니까?')) {
                localStorage.removeItem('HH_token');
                localStorage.removeItem('HH_member_id');
                localStorage.removeItem('HH_name');
                navigate(`/`);
            }
        }
        else {
            navigate(`/login`);
        }
    }

    // inputName 설정 함수
    const searchName = (e) => {
        setInputName(e.target.value);
    }

    // 검색 결과창 띄움 여부
    useEffect(() => {
        if (inputName !== '') {
            setShowDropDown(true);
        }
        else setShowDropDown(false);
    })

    // 검색 통신. 검색창이 비었을 경우 userList 비우고 있을 경우 userList 받아오기
    useEffect(() => {
        if (inputName !== '') {
            axios.post(`${process.env.REACT_APP_PROXY}/accounts/membersearchbykeyword`, {
                keyword: inputName
            }, {
                headers: {
                    Authorization: token
                }
            })
                .then((res) => {
                    if (inputName == '') {
                        setUserList([]);
                    }
                    setUserList([res.data.Member][0]);
                })
                .catch((err) => {
                    console.log(err);
                    setUserList([]);
                })
        }
        else {
            setUserList([]);
        }
    }, [inputName]);

    // 로고 누를 시 mainpage 이동
    const clickLogo = () =>{
        if(localStorage.getItem('HH_name')){
            navigate(`/${localStorage.getItem('HH_name')}`);
            return
        }
        navigate(`/`);
    }

    // 검색 결과창에서 유저 눌렀을 시 해당 유저 페이지로 이동
    function moveToUser(userName) {
        navigate(`/${userName}`);
        window.location.reload();
    }

    // 검색 결과가 있을 경우 검색 결과 띄움 여부 결정
    useEffect(() => {
        const container = document.querySelector('.SearchUser_top_search_dropdown');
        const serarchInput = document.querySelector('.SearchUser_top_search_input');
        document.addEventListener('mouseup', function (e) {
            if (container !== null) {
                if (!container.contains(e.target)) {
                    container.style.display = 'none';
                }
                if (serarchInput.contains(e.target)) {
                    container.style.display = 'block';
                }
            }
        });
    })

    // 검색 결과가 없을 경우 검색 결과 띄움 여부 결정
    useEffect(() => {
        const container = document.querySelector('.SearchUser_top_search_dropdown2');
        const serarchInput = document.querySelector('.SearchUser_top_search_input');
        document.addEventListener('mouseup', function (e) {
            if (container !== null) {
                if (!container.contains(e.target)) {
                    container.style.display = 'none';
                }
                if (serarchInput.contains(e.target)) {
                    container.style.display = 'block';
                }
            }
        });
    })

    return (
        <div className='SearchUser_top_box'>
            <div className='SearchUser_top_searchContainer'>
                
                {/* 검색창 */}
                <div className='SearchUser_top_searchBox'>
                    <input className='SearchUser_top_search_input' ref={inputRef}
                        value={inputName} onChange={searchName} placeholder='user name' />
                    <img alt='검색' src={`${process.env.REACT_APP_IMAGE}/media/images/HH_icon_search_name.png`} />
                </div>
                
                {/* 검색 결과창  */}
                <div className='SearchUser_dropdownBox'>
                    {showDropDown &&
                        <div className='SearchUser_top_search_dropdown'>
                            {
                                userList.map((e, i) => {
                                    return (
                                        <div className="SearchUser_userList" key={i}
                                            onClick={() => { moveToUser(e.name) }}>
                                            <div className="SearchUser_userImgContainer">
                                                <img
                                                    className="SearchUser_userImg"
                                                    src={`${process.env.REACT_APP_IMAGE}/media/${e.img}`}
                                                />
                                            </div>
                                            <div className="SearchUser_userName">{e.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>}
                    
                    {/* 검색 결과 없을 경우, 검색 입력값이 없을 경우 */}
                    {
                        showDropDown&&userList.length == 0 ? 
                        <div className='SearchUser_top_search_dropdown2'>
                            <div className='SearchUser_nouser_alert'>검색 결과가 없습니다..</div>
                        </div>
                        :null
                    }
                </div>
            </div>

            {/* 현 위치가 userPage 인 경우 */}
            {   
                pageLocation !== "" && pageLocation !== "NotFoundPage" ?
                localStorage.getItem('HH_token') && localStorage.getItem('HH_name') && localStorage.getItem('HH_member_id')
                    ? 
                    <div className='SearchUser_logButton'>
                        <button onClick={() => { moveIndex('logout') }} >LogOut</button>
                    </div>
                    : 
                    <div className='SearchUser_logButton'>
                        <button onClick={() => { moveIndex('login') }} >Login</button>
                    </div>
                :null
            }

            {/* 현 위치가 메인페이지가 아닌 경우 */}
            {
                pageLocation !== "" &&
                    <div className='SearchUser_box' onClick={()=>{clickLogo()}}>
                        <div className='SearchUser_logo_left'>Health</div>
                        <div className='SearchUser_logo_right'>Hub</div>
                    </div>
            }
        </div>
    );
};

export default SearchUser;