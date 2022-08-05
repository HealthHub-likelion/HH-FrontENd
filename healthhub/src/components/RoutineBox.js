import '../styles/components/RoutineBox.css'
import { useState } from 'react';
import ShowRoutineModal from './modals/ShowRoutineModal';

function RoutineBox({routinesList}) {
    // ===== 임시 데이터 =====
    const [exercises, setExercises] = useState([
        {
            en_name: 'BenchPress(Barbell)',
            kr_name: '벤치프레스(바벨)',
            set:[
                {
                    kg: '50',
                    rep: '12'
                },
                {
                    kg: '50',
                    rep: '8'
                },
                {
                    kg: '50',
                    rep: '6'
                }
            ]
        },
        {
            en_name: 'InclineBenchPress(Barbell)',
            kr_name: '인클라인벤치프레스(바벨)',
            set:[
                {
                    kg: '40',
                    rep: '12'
                },
                {
                    kg: '40',
                    rep: '9'
                },
                {
                    kg: '40',
                    rep: '6'
                }
            ]
        },
        {
            en_name: 'ChestDip',
            kr_name: '체스트딥',
            set:[
                {
                    kg: '75',
                    rep: '12'
                },
                {
                    kg: '75',
                    rep: '7'
                },
                {
                    kg: '75',
                    rep: '5'
                }
            ]
        }
    ])
    //===============

    const [showRoutine, setShowRoutine] = useState(false);

    const clickRoutine =(state)=>{
        if(state === 'private'){
            alert('잠겨있는 루틴입니다.');
            return;
        }
        setShowRoutine(true);
    }

    const showRoutines = () =>{
        const list = [];
        
        for(let i = 0; i < routinesList.length; i++){
            list.push(
                <div key={i} className='routineBox' onClick={()=>{clickRoutine(routinesList[i]['state'])}}>
                    <div className='routineBox_top'>
                        <div className='routineBox_left'>
                            <div className='routineBox_title'>
                                {routinesList[i]['routine_name']}
                            </div>
                            {routinesList[i]['state']==='private'
                            &&<img alt='공개여부' src='images/icons/HH_icon_security.png'/>}
                        </div>
                        <div className='routineBox_right'>
                            {routinesList[i]['record_count']} records
                        </div>
                    </div>
                    <div className='routineBox_bottom'>
                        latest_date: {routinesList[i]['latest_date']}
                    </div>
                </div>
            )
        }
        list.push(
            <div key={-1} className='routineBox_plus'><img alt='플러스' src='images/icons/HH_icon_plus.png'/></div>
        )

        return list;
    }

    return (
        <div className="RoutineBox">
            {showRoutines()}

            <ShowRoutineModal 
                show={showRoutine}
                onHide={()=>{setShowRoutine(false)}}
                exercises={exercises}
            />
        </div>
    );
}

export default RoutineBox;