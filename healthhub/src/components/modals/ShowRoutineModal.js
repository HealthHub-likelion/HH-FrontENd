import '../../styles/components/modals/ShowRoutineModal.css';
import {Modal} from 'react-bootstrap';
import EditRoutineModal from './EditRoutineModal';
import { useEffect, useState } from 'react';
import proxy from '../../security/Proxy.json'
import axios from 'axios';

function ShowRoutineModal({show, onHide, clickRoutineId, userData}) {
    const [showEdit, setShowEdit] = useState(false);
    const [routineContent, setRoutineContent] = useState({});

    useEffect(()=>{
        if(clickRoutineId!==-1){
            axios.get(`${proxy['proxy_url']}/exercise/routine/${clickRoutineId}/`, {
                headers:{
                    Authorization: localStorage.getItem('HH_token')
                }
            })
            .then((res)=>{
                console.log(res.data);
                setRoutineContent(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },[clickRoutineId]);


    const showRep = (set) =>{
        const set_list = [];

        for(let k = 0; k < set.length; k++){
            set_list.push(
                <div key={k} className='exercise_set_box'>
                    <div>{k+1}</div>
                    <div>{set[k]['weight']}</div>
                    <div>X</div>
                    <div>{set[k]['count']}</div>
                </div>
            );
        }

        return set_list;
    }

    const showExercises = () =>{
        const exercises = routineContent.re_routine;
        const exercise_list = [];
        
        if(exercises){
            for(let i = 0; i < exercises.length; i++){
                exercise_list.push(
                    <div key={i} className='exercise_box'>
                        <div className='exercise_title'>
                            <div className='exercise_title_en'>{exercises[i]['exercise_en_name']}</div>
                            <div className='exercise_title_kr'>{exercises[i]['exercise_ko_name']}</div>
                        </div>
                        <div className='exercise_column'>
                            <div>세트</div>
                            <div>kg</div>
                            <div></div>
                            <div>렙</div>
                        </div>
                        <div>
                            {showRep(exercises[i]['set_exercise'])}
                        </div>
                    </div>
                );
            }
        }
        return exercise_list;
    }

    return (
        <div className="ShowRoutineModal">
            <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Body className='show_routine_content'>
                    <div className='show_routine_header'>
                        <div>
                        {routineContent.routineName}
                        </div>
                        <div>
                            {userData.isFollow!==null&&
                                <button><img className='fork_img' alt='fork' src={`${proxy['proxy_url']}/media/images/HH_icon_fork.png`}/>Fork</button>
                            }
                            <img alt='취소' src={`${proxy['proxy_url']}/media/images/icons/HH_icon_close_black.png`} onClick={onHide}/>
                        </div>
                    </div>
                    <div className='show_routine_body'>
                        {showExercises()}
                    </div>
                    <div className='show_routine_footer'>
                        <button onClick={()=>{setShowEdit(true); onHide();}}>
                            편집
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* <EditRoutineModal
                show={showEdit}
                onHide={()=>{setShowEdit(false)}}
                exercises={props.exercises}
            /> */}
        </div>
    );
}

export default ShowRoutineModal;