import React from 'react';
import '../styles/components/ElementProfileBox.css'
import { useLocation } from 'react-router-dom';

const ElementProfileBox = () => {

    const location = useLocation(); ///userPage/Records or Feeds
    const pageLocation = location.pathname.split("/")[2]; //Records or Feeds

    return (
        <>
            {pageLocation === "Feeds" ?
                <div className='ElementProfileBox'>
                    <div className='waveElement_profileImg'><img/></div>
                    <div className='waveElement_profileName'>SHIN</div>
                </div>
            :null
            }
        </>
    );
};

export default ElementProfileBox;