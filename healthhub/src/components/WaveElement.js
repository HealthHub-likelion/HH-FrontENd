import React from 'react';
import '../styles/components/WaveElement.css'
import ElementProfileBox from './ElementProfileBox';
import proxy from '../security/Proxy.json';

const WaveElement = ({record_img, create_time, routine_name, comment,member_nickname,member_img}) => {
    return (
        <div className='WaveElement'>
            <div className='waveElement_container'>
                <ElementProfileBox member_nickname = {member_nickname} member_img = {member_img} />
                {record_img !== null ? 
                    <div className='waveElement_imgContainer'>
                        <img
                            className='waveElement_img'
                            src = {`${proxy['proxy_url']}${record_img}`}
                            alt = "records_Img"/>
                    </div> : null
                }
                <div className='waveElement_content'>
                    <div className='waveElement_content_fistLine'>
                        <div className='waveElement_today'>Today's routine</div>
                        <div className='waveElement_date'>{create_time}</div>
                    </div>
                    <div className='waveElement_content_secondLine'>
                        <div className='waveElement_routine'>{routine_name}</div>
                        <div className='waveElement_comment'>{comment}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaveElement;