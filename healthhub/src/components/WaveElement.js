import React from 'react';
import '../styles/components/WaveElement.css'
import ElementProfileBox from './ElementProfileBox';

const WaveElement = ({record_img, create_time, routine_name, comment,member_nickname,member_img}) => {
    return (
        <div className='WaveElement'>
            <div className='waveElement_container'>
                <ElementProfileBox member_nickname = {member_nickname} member_img = {member_img} />
                {record_img !== null ? 
                    <div className='waveElement_imgContainer'>
                        <img src = {record_img}/>
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