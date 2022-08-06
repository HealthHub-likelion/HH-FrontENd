import '../../styles/components/modals/CreateRoutineModal.css'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

function CreateRoutineModal(props) {
    const [createState, setCreateState] = useState({
        create_name: '',
        create_isOpne: true,
        create_exercises: []
    });
    const [createExercise, setCreateExercise] = useState({
        exercise_name: '',
        set: []
    })

    return (
        <div className="CreateRoutineModal">
            <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Body className='create_routine_content'>
                    <div className='create_routine_header'>
                        <input placeholder='루틴 이름'/>
                        <div>
                            <button className={createState['create_isOpne']?'create_routine_state_click':'create_routine_state_unclick'}
                                    onClick={()=>{setCreateState({...createState, create_isOpne: true})}}>public</button>
                            <button className={createState['create_isOpne']?'create_routine_state_unclick':'create_routine_state_click'}
                                    onClick={()=>{setCreateState({...createState, create_isOpne: false})}}>private</button>
                        </div>
                    </div>
                    <div className='create_routine_body'>

                    </div>
                    <div className='create_routine_footer'>
                        <button className='create_routine_footer_left'>
                            취소
                        </button>
                        <button className='create_routine_footer_right'>
                            생성
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CreateRoutineModal;