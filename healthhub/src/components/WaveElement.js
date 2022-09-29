import React from 'react';
import '../styles/components/WaveElement.css'
import ElementProfileBox from './ElementProfileBox';
import { useState } from 'react';
import ShowRoutineModal from '../components/modals/ShowRoutineModal';
import ShowReplyModal from '../components/modals/ShowReplyModal';

const WaveElement = ({ record_id, record_img, create_time, routine_name, comment, member_nickname, member_img, userData, setUserData, isOpen, routineId, pre }) => {
    const [showReply, setShowReply] = useState(false);
    const [showRoutine, setShowRoutine] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const [like, setLike] = useState({
        liked: false,
        count: 0,
    });

    function handleComment(comment) {
        if (comment.length > 15) {
            if (openComment) {
                return ''
            }
            else {
                return comment.substr(0, 15) + '...';
            }
        }
        else return comment
    }

    function handleOpen() {
        setOpenComment(true);
    }

    const showComment = () => {
        const line = comment.split('\n');
        const list = [];

        for (let i = 0; i < line.length; i++) {
            list.push(
                <div key={i}>{line[i]}</div>
            );
        }
        return list;
    }

    const closeComment = () => {
        setOpenComment(false);
    }

    const showModal = () => {
        if (isOpen || member_nickname === localStorage.getItem('HH_name')) {
            setShowRoutine(true);
            return;
        }
        alert('잠겨있는 루틴입니다.');
    }

    const showReplyModal = () => {
        // if (isOpen || member_nickname === localStorage.getItem('HH_name')) {
        //     setShowReply(true);
        //     return;
        // }
        setShowReply(true);
    }

    {/* 좋아요 상태/횟수 변경 함수 */ }
    const changeLike = () => {
        setLike({
            ...like,
            liked: !like.liked,
            count: like.liked === false ? like.count + 1 : like.count - 1,
        })
    }

    return (
        <div className='WaveElement'>
            <div className='waveElement_container'>
                <ElementProfileBox member_nickname={member_nickname} member_img={member_img} />
                {record_img !== null ?
                    <div className='waveElement_imgContainer'>
                        <img
                            className='waveElement_img'
                            src={`${process.env.REACT_APP_IMAGE}${record_img}`}
                            alt="records_Img" />
                    </div> : null
                }
                <div className='waveElement_content' >
                    <div className='waveElement_content_fistLine'>
                        <div className='waveElement_today'>Today's routine</div>
                        <div className='waveElement_date'>{create_time}</div>
                    </div>
                    <div className='waveElement_content_secondLine'>
                        <div className='waveElement_routine' onClick={() => { showModal() }}>{routine_name}</div>
                        <div
                            className='waveElement_comment'
                            onClick={handleOpen}>{handleComment(comment)}</div>
                    </div>

                    {/* 좋아요, 댓글 */}
                    <div className='waveElement_content_thirdLine'>
                        <div className='waveElement_like'>
                            {/* 좋아요 누르면 변경 */}
                            {like.liked === false
                                ? <img src='/img/like.png' alt='좋아요' onClick={() => { changeLike() }} />
                                : <img src='/img/liked.png' alt='좋아요 누름' onClick={() => { changeLike() }} />}{like.count}</div>
                        <div className='waveElement_reply' onClick={() => { showReplyModal() }}><img src='/img/reply.png' alt='댓글' />0</div>
                    </div>
                    {
                        openComment === true && comment.length > 15 ?
                            <>
                                <div className='waveElement_detailComment'>
                                    {showComment()}
                                </div>
                                <div
                                    className='waveElement_closeComment'
                                    onClick={closeComment}>접기</div>
                            </>
                            : null
                    }
                </div>
            </div>

            <ShowRoutineModal
                show={showRoutine}
                onHide={() => { setShowRoutine(false) }}
                userData={userData}
                setUserData={setUserData}
                clickRoutineId={routineId}
                pre={pre}
            />

            <ShowReplyModal
                show={showReply}
                onHide={() => { setShowReply(false) }}
                userData={userData}
                setUserData={setUserData}
                record_id={record_id}
                pre={pre}
            />
        </div>
    );
};

export default WaveElement;