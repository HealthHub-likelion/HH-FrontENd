import '../styles/components/RoutineBox.css'
import { useEffect, useState } from 'react';
import ShowRoutineModal from './modals/ShowRoutineModal';
import CreateRoutineModal from './modals/CreateRoutineModal';
import proxy from '../security/Proxy.json'

function RoutineBox({  userData }) {
    const [showRoutine, setShowRoutine] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [proceedCreate, setProceedCreate] = useState(false);

    useEffect(()=>{
        if(proceedCreate){
            setShowCreate(true);
            setProceedCreate(false);
        }
    },[proceedCreate]);

    const [createState, setCreateState] = useState({
        create_name: '',
        create_isOpne: true,
        create_exercises: []
    });

    const showCreateModal=()=>{
        setCreateState({
            create_name: '', create_isOpne: true, create_exercises: []
        });
        setShowCreate(true);
    }

    const clickRoutine =(state)=>{
        if(!state){
            alert('잠겨있는 루틴입니다.');
            return;
        }
        setShowRoutine(true);
    }


    const showRoutines = () =>{
        const list = [];
        
        if(userData.routine){
            for(let i = 0; i < userData.routine.length; i++){
                list.push(
                    <div key={i} className='routineBox' onClick={()=>{clickRoutine(userData.routine[i]['routineOpen'])}}>
                        <div className='routineBox_top'>
                            <div className='routineBox_left'>
                                <div className='routineBox_title'>
                                    {userData.routine[i]['routineName']}
                                </div>
                                {!userData.routine[i]['routineOpen']
                                &&<img alt='공개여부' src={`${proxy['proxy_url']}/media/images/icons/HH_icon_security.png`}/>}
                            </div>
                            <div className='routineBox_right'>
                                {userData.routine[i]['routineCount']} records
                            </div>
                        </div>
                        {/* <div className='routineBox_bottom'>
                            latest_date: {userData.routine[i]['latest_date']}
                        </div> */}
                    </div>
                )
            }
        }
        list.push(
            <div key={-1} className='routineBox_plus' onClick={()=>{showCreateModal()}}><img alt='플러스' src={`${proxy['proxy_url']}/media/images/icons/HH_icon_plus.png`}/></div>
        )

        return list;
    }

    return (
        <div className="RoutineBox">
            {showRoutines()}

            <ShowRoutineModal 
                show={showRoutine}
                onHide={()=>{setShowRoutine(false)}}
            />
            <CreateRoutineModal
                show={showCreate}
                onHide={()=>{setShowCreate(false)}}
                createState={createState}
                setCreateState={setCreateState}
                setProceedCreate={setProceedCreate}
            />
        </div>
    );
}

export default RoutineBox;