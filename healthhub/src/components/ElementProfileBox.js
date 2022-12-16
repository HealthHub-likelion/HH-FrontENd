import React from 'react';
import '../styles/components/ElementProfileBox.css'
import { useLocation, useNavigate } from 'react-router-dom';

const ElementProfileBox = ({ member_nickname, member_img }) => {

    const navigate = useNavigate();
    const location = useLocation(); ///userPage/Records or Feeds
    const pageLocation = location.pathname.split("/")[2]; //Records or Feeds

    const goUser = (user) => {
        navigate(`/${user}`);
    }

    return (
        <>
            {pageLocation === "Feeds" ?
                <div className='ElementProfileBox' onClick={() => goUser(member_nickname)}>
                    <div className='waveElement_profileImgBox'>
                        <img
                            className='waveElement_profileImgBox'
                            src={`${process.env.REACT_APP_IMAGE}${member_img}`} />
                    </div>
                    <div className='waveElement_profileName'>{member_nickname}</div>
                </div>
                : null
            }
        </>
    );
};

export default ElementProfileBox;