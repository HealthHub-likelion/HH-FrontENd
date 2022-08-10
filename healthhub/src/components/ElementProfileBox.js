import React from 'react';
import '../styles/components/ElementProfileBox.css'
import { useLocation } from 'react-router-dom';
import proxy from '../security/Proxy.json';

const ElementProfileBox = ({member_nickname, member_img}) => {

    const location = useLocation(); ///userPage/Records or Feeds
    const pageLocation = location.pathname.split("/")[2]; //Records or Feeds
    
    console.log(member_img);

    return (
        <>
            {pageLocation === "Feeds" ?
                <div className='ElementProfileBox'>
                    <div className='waveElement_profileImgBox'>
                        <img 
                            className='waveElement_profileImgBox'
                            src = {`${proxy['proxy_url']}/${member_img}`}/>
                    </div>
                    <div className='waveElement_profileName'>{member_nickname}</div>
                </div>
            :null
            }
        </>
    );
};

export default ElementProfileBox;