import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/pages/FollowsPage.css'
import Header from "../components/Header";
import ProfileSession from "../sessions/ProfileSession";
import FollowsSession from "../sessions/FollowsSession";
import InitialData from "../components/InitialData";

function FollowsPage() {
    const {username} = useParams();
    const [userData, setUserData] = useState({});
    const [showFollowers, setShowFollowers] = useState(true);
    // const [follower, setFollower] = useState([]);

    // const token = localStorage.getItem('HH_token');

    // const nagative = useNavigate();

    // const onClickProfile = (id) => {
    //   nagative(`/${id}`);
    // }

    // const axiosFollow = () => {
    //   axios.get(`${proxy['proxy_url']}/accounts/member/follow?who=follower`, {
    //     headers : {
    //       Authorization: token
    //     }
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     setFollower(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    // } 

    // useEffect(() => {
    //   axiosFollow();
    // }, []);

    // const isFollower = Object.keys(follower).length > 0;
    // {console.log(isFollower);}

    // function followerList() {
    //   const list = [];
    //   if(!isFollower){
    //     return;
    //   }
    //   if(showFollowers === true){
    //     for(let i = 0; i < follower['Member'].length; i++){
    //       list.push(
    //         <div className="FollowElement" key={i}>
    //           <div className="followImg">
    //             <img className="profileImg"
    //             src={follower['Member'][i]['img']}
    //             onClick={() => onClickProfile(follower['Member'][i]['img'])}>
    //             </img>
    //           </div>
    //           <div className="followName"
    //           onClick={() => onClickProfile(follower['Member'][i]['name'])}>
    //           {follower['Member'][i]['name']}
    //           </div>
    //         </div>
    //       )
    //     }        
    //   }
    //   else{
        
    //   }
    //   return list;
    // }

    return (
      <div className="FollowsPage">
        <div className="followspage_header">
          <Header Tab={'Follows'} username={username}/>
        </div>
        <div className="followspage_content">
          <div className="followspage_profile">
            <ProfileSession username={username} Tab={'Follows'} 
                            showFollowers={showFollowers} setShowFollowers={setShowFollowers}
                            userData={userData}/>
          </div>
          <div className="followspage_FollowsSession">
            <FollowsSession username={username}
                            showFollowers={showFollowers} setShowFollowers={setShowFollowers}/>
            {/* {followerList()} */}
          </div>
        </div>

        <InitialData 
          username={username}
          setUserData={setUserData}
        />
      </div>
    );
  }

  export default FollowsPage;