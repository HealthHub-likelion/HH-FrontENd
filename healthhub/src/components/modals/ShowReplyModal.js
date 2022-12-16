import '../../styles/components/modals/ShowReplyModal.css';
import { Modal } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import ElementProfileBox from '../ElementProfileBox';
import LoadingSpinner from '../LoadingSpinner';
import { useNavigate } from 'react-router-dom';

function ShowReplyModal({ show, onHide, record_id, userData, setUserData, pre, member_nickname, member_img }) {
    const [load, setLoad] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [routineContent, setRoutineContent] = useState({});
    const [proceedEdit, setProceedEdit] = useState(false);
    const [addExercise, setAddExercise] = useState(false);
    const [showReple, setShowReple] = useState(false);

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
    const navigate = useNavigate();

    const [reply, setReply] = useState({
        pid: record_id,
        id: 0,
        user: userData['name'],
        content: '',
        date: '',
        reple: [],
    })

    const onReplyChange = (event) => {
        setReply({
            ...reply,
            content: event.currentTarget.value
        });
    };

    const onRepleChange = (event) => {
        setReply({
            ...reply,
            reple: event.currentTarget.value
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
            reply.id = saved_array.length;
            saved_array.push(reply);
            localStorage.setItem('reply', JSON.stringify(saved_array));  // 로컬에 저장
        }

        alert('댓글이 등록되었습니다.');
        window.location.reload();
    }

    const updateReply = () => {
        if (reply.reple === '') {
            alert('대댓글을 입력해 주세요!');
            replyRef.current.focus();
            return;
        }

        const saved_array = JSON.parse(localStorage.getItem('reply'));
        var idx = saved_array.findIndex(re => re.id == (saved_array.length - 1));
        // saved_array[idx]['reple'] = "re1":reply.reple;
        saved_array.push(reply);
        localStorage.setItem('reply', JSON.stringify(saved_array));  // 로컬에 저장
    }

    const goUser = (user) => {
        navigate(`/${user}`);
    }

    const showReplies = () => {
        const replies = JSON.parse(localStorage.getItem('reply'));
        const reply_list = [];

        if (replies) {
            for (let i = 0; i < replies.length; i++) {
                if (replies[i].pid === record_id) {
                    reply_list.push(
                        <div key={i} className='reply_box'>
                            <div className='reply_user'>
                                <img
                                    className='reply_user_img'
                                    src={`${process.env.REACT_APP_IMAGE}${member_img}`} />
                                <div onClick={() => goUser(member_nickname)}>{member_nickname}</div>
                            </div>
                            <div className='reply_content'>
                                <div className='reply_content_content'>
                                    {replies[i].content}
                                </div>

                                <div className='reply_content_date'>
                                    {replies[i].date}
                                    <span onClick={() => setShowReple(!showReple)}>대댓글</span>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        }

        // 댓글이 없으면 없다고 표시.
        if (reply_list.length === 0) {
            reply_list.push(
                <div className='reply_none'>댓글이 없습니다.</div>
            )
        }

        return reply_list;
    }

    const message = '님에게';

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
                        {showReplies()}
                    </div>
                    {showReple === false ?
                        <div className='show_reply_footer'>
                            <textarea
                                className="write_content"
                                placeholder='댓글을 입력해 주세요.'
                                ref={replyRef}
                                onChange={onReplyChange}
                                value={reply.content}
                                type="text" >
                            </textarea>
                            <button
                                className="posting-button"
                                onClick={addReply}
                                type="button"
                            >
                                <img src='/img/send.png' alt='등록' />
                            </button>
                        </div> :
                        <div className='show_reply_footer'>
                            <textarea
                                className="write_content"
                                placeholder={message}
                                ref={replyRef}
                                onChange={onRepleChange}
                                value={reply.reple}
                                type="text" >
                            </textarea>
                            <button
                                className="posting-button"
                                onClick={updateReply}
                                type="button"
                            >
                                <img src='/img/send.png' alt='대댓글등록' />
                            </button>
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ShowReplyModal;