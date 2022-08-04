import React from 'react';
import '../styles/components/WaveElement.css'
import ElementProfileBox from './ElementProfileBox';

//나중에 이미지 존재 여부 확인하여 수정..
const WaveElement = () => {
    return (
        <div className='WaveElement'>
            <div className='waveElement_container'>
                <ElementProfileBox/>
                <div className='waveElement_imgContainer'><img/></div>
                <div className='waveElement_content'>
                    <div className='waveElement_content_fistLine'>
                        <div className='waveElement_today'>Today's routine</div>
                        <div className='waveElement_date'>22.07.31</div>
                    </div>
                    <div className='waveElement_content_secondLine'>
                        <div className='waveElement_routine'>가슴</div>
                        <div className='waveElement_comment'>오늘도 증말 힘들다..</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaveElement;