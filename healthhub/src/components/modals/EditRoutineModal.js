import '../../styles/components/modals/EditRoutineModal.css'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import SearchExerciseOffcanvas from '../offcanvases/SearchExerciseOffcanvas';

function EditRoutineModal(props) {
    // ===== 임시데이터 =====
    const [dummydata, setDummydate] = useState({
        routine_name: '등',
        isOpen: 'public',
        set: props.exercises
    })
    // ==================

    const [addExercise, setAddExercise] = useState(false);

    const editRep = (set, index) =>{
        const set_list = [];

        for(let k = 0; k < set.length; k++){
            set_list.push(
                <div key={k} className='edit_exercise_set_box'>
                    <div>{k+1}</div>
                    <div>
                        <input type='number' placeholder={set[k]['kg']}/>
                    </div>
                    <div>X</div>
                    <div>
                        <input type='number' placeholder={set[k]['rep']}/>
                    </div>
                    <div>
                        {k!==0&&<button>삭제</button>}
                    </div>
                </div>
            );
        }
        set_list.push(
            <div key={-1} className='edit_add_set'>
                <button>세트 추가</button>
            </div>
        )

        return set_list;
    }

    const editExercises = () =>{
        const exercises = dummydata['set'];
        const exercise_list = [];
        
        exercise_list.push(<button key='add' className='edit_add_exercise' 
                            onClick={()=>{setAddExercise(true); props.onHide();}}>운동 추가</button>);
        for(let i = 0; i < exercises.length; i++){
            exercise_list.push(
                <div key={exercises[i]['kr_name']} className='edit_exercise_box'>
                    <div className='edit_exercise_top'>
                        <div>
                            <div className='edit_exercise_title_en'>{exercises[i]['en_name']}</div>
                            <div className='edit_exercise_title_kr'>{exercises[i]['kr_name']}</div>
                        </div>
                        <button>삭제</button>
                    </div>
                    <div className='edit_exercise_column'>
                        <div>세트</div>
                        <div>kg</div>
                        <div></div>
                        <div>렙</div>
                        <div></div>
                    </div>
                    <div>
                        {editRep(exercises[i]['set'], i)}
                    </div>
                </div>
            );
        }
        return exercise_list;
    }

    return (
        <div className="EditRoutineModal">
            <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Body className='edit_routine_content'>
                    <div className='edit_routine_header'>
                        <input placeholder={dummydata['routine_name']} onChange={(e)=>{setDummydate({...dummydata, routine_name:e.target.value})}}/>
                        <div>
                            <button className={dummydata['isOpen']==='public'?'edit_routine_state_click':'edit_routine_state_unclick'}
                                    onClick={()=>{setDummydate({...dummydata, isOpen: 'public'})}}>public</button>
                            <button className={dummydata['isOpen']==='public'?'edit_routine_state_unclick':'edit_routine_state_click'}
                                    onClick={()=>{setDummydate({...dummydata, isOpen: 'private'})}}>private</button>
                        </div>
                    </div>
                    <div className='edit_routine_body'>
                        {editExercises()}
                    </div>
                    <div className='edit_routine_footer'>
                        <button>Routine 삭제</button>
                        <div>
                            <button className='edit_routine_footer_left'>
                                취소
                            </button>
                            <button className='edit_routine_footer_right'>
                                저장
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <SearchExerciseOffcanvas
                show={addExercise}
                onHide={()=>{setAddExercise(false)}}
                routine={dummydata}
                pre_modal='edit'
            />
        </div>
    );
}

export default EditRoutineModal;