import axios from 'axios';
import proxy from '../security/Proxy.json'
import { useEffect } from 'react';

function InitialData({username, setUserData}) {
    useEffect(()=>{
        const token = localStorage.getItem('HH_token')?localStorage.getItem('HH_token'):''
  
        axios.get(`${proxy['proxy_url']}/accounts/member/?name=${username}`, {
          headers:{
              Authorization: token
          }
        })
        .then((res)=>{
          const data = res.data;

          if(data.isFollow === null){
            localStorage.setItem('HH_member_id', data.id);
          }
          setUserData(data);
        })
        .catch((err)=>{
          console.log(err);
          // 후에 사용자를 못찾았다는 경고 페이지 생성
          // navigate(`/`);
        })
      }, [])
}

export default InitialData;