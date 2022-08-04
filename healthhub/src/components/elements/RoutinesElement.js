import { useState } from 'react';
import '../../styles/components/elements/RoutinesElement.css'
import RoutineBox from '../RoutineBox';

function RoutinesElement() {
    // ===== 임시 데이터 =====
    const [routinesList] = useState([
        {
            routine_name: '가슴',
            state: 'private',
            record_count: '6',
            latest_date: '22.07.30'
        },
        {
            routine_name: '등',
            state: 'public',
            record_count: '8',
            latest_date: '22.07.25'
        },
        {
            routine_name: '하체',
            state: 'private',
            record_count: '7',
            latest_date: '22.07.23'
        }
    ])
    // ===============

    return (
        <div className="RoutinesElement">
            <div className='routines_header'>
                Routines
            </div>
            <div className='routines_body'>
                <RoutineBox routinesList={routinesList}/>
            </div>
        </div>
    );
}

export default RoutinesElement;