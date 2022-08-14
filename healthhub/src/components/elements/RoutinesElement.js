import { useState } from 'react';
import '../../styles/components/elements/RoutinesElement.css'
import RoutineBox from '../RoutineBox';

function RoutinesElement({userData}) {

    return (
        <div className="RoutinesElement">
            <div className='routines_header'>
                Routines
            </div>
            <div className='routines_body'>
                <RoutineBox userData={userData}/>
            </div>
        </div>
    );
}

export default RoutinesElement;