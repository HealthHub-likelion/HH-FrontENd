import '../../styles/components/modals/ShowRoutineModal.css';
import {Modal} from 'react-bootstrap';
import EditRoutineModal from './EditRoutineModal';
import { useState } from 'react';
import proxy from '../../security/Proxy.json'

function ShowRoutineModal({userData, setUserData}) {
    // const [showEdit, setShowEdit] = useState(false);

    // const showRep = (set) =>{
    //     const set_list = [];

    //     for(let k = 0; k < set.length; k++){
    //         set_list.push(
    //             <div key={k} className='exercise_set_box'>
    //                 <div>{k+1}</div>
    //                 <div>{set[k]['kg']}</div>
    //                 <div>X</div>
    //                 <div>{set[k]['rep']}</div>
    //             </div>
    //         );
    //     }

    //     return set_list;
    // }

    // const showExercises = () =>{
    //     const exercises = props.exercises;
    //     const exercise_list = [];
        
    //     for(let i = 0; i < exercises.length; i++){
    //         exercise_list.push(
    //             <div key={i} className='exercise_box'>
    //                 <div className='exercise_title'>
    //                     <div className='exercise_title_en'>{exercises[i]['en_name']}</div>
    //                     <div className='exercise_title_kr'>{exercises[i]['kr_name']}</div>
    //                 </div>
    //                 <div className='exercise_column'>
    //                     <div>세트</div>
    //                     <div>kg</div>
    //                     <div></div>
    //                     <div>렙</div>
    //                 </div>
    //                 <div>
    //                     {showRep(exercises[i]['set'])}
    //                 </div>
    //             </div>
    //         );
    //     }
    //     return exercise_list;
    // }

    // return (
    //     <div className="ShowRoutineModal">
    //         <Modal
    //         {...props}
    //         aria-labelledby="contained-modal-title-vcenter"
    //         centered
    //         >
    //             <Modal.Body className='show_routine_content'>
    //                 <div className='show_routine_header'>
    //                     <div>
    //                         등
    //                     </div>
    //                     <img alt='취소' src={`${proxy['proxy_url']}/media/images/icons/HH_icon_close_black.png`} onClick={props.onHide}/>
    //                 </div>
    //                 <div className='show_routine_body'>
    //                     {showExercises()}
    //                 </div>
    //                 <div className='show_routine_footer'>
    //                     <button onClick={()=>{setShowEdit(true); props.onHide();}}>
    //                         편집
    //                     </button>
    //                 </div>
    //             </Modal.Body>
    //         </Modal>

    //         <EditRoutineModal
    //             show={showEdit}
    //             onHide={()=>{setShowEdit(false)}}
    //             exercises={props.exercises}
    //         />
    //     </div>
    // );
}

export default ShowRoutineModal;