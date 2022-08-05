import '../../styles/components/modals/EditRoutineModal.css'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

function EditRoutineModal(props) {
    // ===== 임시데이터 =====
    const [dummydata, setDummydate] = useState({
        routine_name: '등',
        isOpen: 'public',
        set: props.exercises
    })

    const editRep = (set, index) =>{
        const set_list = [];

        for(let k = 0; k < set.length; k++){
            set_list.push(
                <div key={k} className='edit_exercise_set_box'>
                    <div>{k+1}</div>
                    <div>
                        <input placeholder={set[k]['kg']}/>
                    </div>
                    <div>X</div>
                    <div>
                        <input placeholder={set[k]['rep']}/>
                    </div>
                    <div>
                        <button>삭제</button>
                    </div>
                </div>
            );
        }
        set_list.push(
            <div className='edit_add_set'>
                <button key={-1}>세트 추가</button>
            </div>
        )

        return set_list;
    }

    const editExercises = () =>{
        const exercises = dummydata['set'];
        const exercise_list = [];
        
        exercise_list.push(<button className='edit_add_exercise'>운동 추가</button>);
        for(let i = 0; i < exercises.length; i++){
            exercise_list.push(
                <div key={i} className='edit_exercise_box'>
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
        </div>
    );
}

export default EditRoutineModal;