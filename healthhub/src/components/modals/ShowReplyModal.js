import '../../styles/components/modals/ShowReplyModal.css';
import { Modal } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner';

function ShowReplyModal({ show, onHide, record_id, userData, setUserData, pre }) {
    const [load, setLoad] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [routineContent, setRoutineContent] = useState({});
    const [proceedEdit, setProceedEdit] = useState(false);
    const [addExercise, setAddExercise] = useState(false);

    useEffect(() => {
        if (!addExercise && proceedEdit) {
            setShowEdit(true);
        }
    }, [addExercise]);

    // useEffect(() => {
    //     if (clickRoutineId !== -1 && !proceedEdit) {
    //         axios.get(`${process.env.REACT_APP_PROXY}/exercise/routine/${clickRoutineId}/`, {
    //             headers: {
    //                 Authorization: localStorage.getItem('HH_token')
    //             }
    //         })
    //             .then((res) => {
    //                 setRoutineContent(res.data);
    //             })
    //             .catch((err) => {
    //                 // console.log(err);
    //             })
    //     }
    // }, [clickRoutineId, showEdit]);

    const replyRef = useRef();

    const [reply, setReply] = useState({
        pid: record_id,
        id: 0,
        content: '',
        date: '',
    })

    const onContentChange = (event) => {
        setReply({
            ...reply,
            content: event.currentTarget.value
        });
    };

    const getDate = () => {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let today = `${year}-${month}-${date}`

        return today;
    }

    const addReply = () => {
        if (reply.content === '') {
            alert('댓글을 입력해 주세요!');
            replyRef.current.focus();
            return;
        }

        reply.date = getDate()

        if (!localStorage.getItem('reply')) {
            const index_array = [];
            index_array.push(reply);
            localStorage.setItem('reply', JSON.stringify(index_array));  // 로컬에 저장
        }
        else {
            const saved_array = JSON.parse(localStorage.getItem('reply'));
            saved_array.push(reply);
            localStorage.setItem('reply', JSON.stringify(saved_array));  // 로컬에 저장
        }

        window.location.reload();
    }

    const showReplies = () => {
        const replies = JSON.parse(localStorage.getItem('reply'));
        const reply_list = [];

        if (replies) {
            for (let i = 0; i < replies.length; i++) {
                if (replies[i].pid === record_id) {
                    reply_list.push(
                        <div key={i} className='reply_box'>
                            <div className='exercise_title'>
                                사용자{i + 1}
                            </div>
                            <div className='exercise_column'>
                                {replies[i].content}
                            </div>
                            <div>
                                {replies[i].date}
                            </div>
                        </div>
                    );
                }
            }
        }

        // 댓글이 없으면 없다고 표시.
        if (reply_list.length === 0) {
            reply_list.push(
                <div className='reply_box'>작성된 댓글이 없습니다.</div>
            )
        }

        return reply_list;
    }

    return (
        <div className="ShowReplyModal">
            <Modal
                show={show}
                onHide={onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='show_reply_content'>
                    {load ? <LoadingSpinner load={load} /> : null}

                    <div className='show_reply_header'>
                        <div>
                            댓글
                        </div>
                        <div>
                            <img alt='취소' src={`${process.env.REACT_APP_PROXY}/media/images/icons/HH_icon_close_black.png`} onClick={onHide} />
                        </div>
                    </div>
                    <div className='show_reply_body'>
                        <textarea
                            className="reply_content"
                            placeholder='댓글을 입력해 주세요.'
                            ref={replyRef}
                            onChange={onContentChange}
                            value={reply.content}
                            type="text" >
                        </textarea>
                        <button
                            className="posting-button"
                            onClick={addReply}
                            type="button"
                        >
                            등록
                        </button>
                        {showReplies()}
                    </div>
                    <div className='show_reply_footer'>
                        댓글목록
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ShowReplyModal;