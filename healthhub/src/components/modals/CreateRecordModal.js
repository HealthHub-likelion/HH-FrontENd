import '../../styles/components/modals/CreateRecordModal.css'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import UploadImage from '../UploadImage';

function CreateRecordModal(props) {
    const date = new Date();
    const tenMinAgo = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()-10);
    const oneHourTenMinAgo = new Date(tenMinAgo.getFullYear(), tenMinAgo.getMonth(), tenMinAgo.getDate(), tenMinAgo.getHours()-1, tenMinAgo.getMinutes());

    const regularNumber = (num) =>{
        return num < 10? '0'+num : num;
    }

    const [imageSrc, setImageSrc] = useState('');
    const [addRecordData, setAddRecordData] = useState({
        start_time: {
            year: oneHourTenMinAgo.getFullYear(),
            month: regularNumber(oneHourTenMinAgo.getMonth()),
            date: regularNumber(oneHourTenMinAgo.getDate()),
            hour: regularNumber(oneHourTenMinAgo.getHours()),
            minute: regularNumber(oneHourTenMinAgo.getMinutes()),
            seconds: '00'
        },
        end_time: {
            year: tenMinAgo.getFullYear(),
            month: regularNumber(tenMinAgo.getMonth()),
            date: regularNumber(tenMinAgo.getDate()),
            hour: regularNumber(tenMinAgo.getHours()),
            minute: regularNumber(tenMinAgo.getMinutes()),
            seconds: '00'
        },
        routine_id: '',
        img: null,
        comment: ''
    })

    const checkDay = (state) => {
        if(state){
            setAddRecordData({...addRecordData, 
                start_time:{...addRecordData['start_time'], date: regularNumber(date.getDate())}});
            return;
        }
        setAddRecordData({...addRecordData, 
            start_time:{...addRecordData['start_time'], date: regularNumber(date.getDate()-1)}});
    }

    const inputHour = (state, e) =>{
        if(state === 'start'){
            setAddRecordData({...addRecordData, 
                start_time:{...addRecordData['start_time'], hour: regularNumber(e.target.value)}});
            return;
        }
        setAddRecordData({...addRecordData, 
            end_time:{...addRecordData['end_time'], hour: regularNumber(e.target.value)}});
    }
    const inputMinute = (state, e) =>{
        if(state === 'start'){
            setAddRecordData({...addRecordData, 
                start_time:{...addRecordData['start_time'], minute: regularNumber(e.target.value)}});
            return;
        }
        setAddRecordData({...addRecordData, 
            end_time:{...addRecordData['end_time'], minute: regularNumber(e.target.value)}});
    }
    const inputComment = (e) =>{
        setAddRecordData({...addRecordData, comment: e.target.value});
    }

    return (
        <div className="CreateRecordModal">
            <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Body className='create_record_modal_body'>
                    <div className='create_record_header'>Today's Workout</div>
                    <div className='create_record_body'>
                        <div className='create_record_time'>
                            <div className='create_record_title'>
                                <div>time to workout</div><></>
                            </div>
                            <div className='create_record_sub_body'> 
                                <div>
                                    <div className='create_record_time_title'>시작</div>
                                    <div className='create_record_input_group'>
                                        {oneHourTenMinAgo.getDate() === date.getDate()
                                        ?
                                        <><input type='radio' name='day' onClick={()=>{checkDay(false)}}/><label>어제</label>
                                        <input type='radio' name='day' onClick={()=>{checkDay(true)}} defaultChecked/><label>오늘</label></>
                                        :
                                        <><input type='radio' name='day' onClick={()=>{checkDay(false)}} defaultChecked/><label>어제</label>
                                        <input type='radio' name='day' onClick={()=>{checkDay(true)}} /><label>오늘</label></>
                                        }
                                        <input className='create_record_input_time' placeholder={addRecordData['start_time']['hour']} 
                                                type='number' onChange={(e)=>{inputHour('start', e)}}/><div>시</div>
                                        <input className='create_record_input_time' placeholder={addRecordData['start_time']['minute']} 
                                                type='number' onChange={(e)=>{inputMinute('start', e)}}/><div>분</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='create_record_time_title'>종료</div>
                                    <div className='create_record_input_group'>
                                        <label>오늘</label>
                                        <input className='create_record_input_time' placeholder={addRecordData['end_time']['hour']} 
                                                type='number' onChange={(e)=>{inputHour('end', e)}}/><div>시</div>
                                        <input className='create_record_input_time' placeholder={addRecordData['end_time']['minute']} 
                                                type='number' onChange={(e)=>{inputMinute('end', e)}}/><div>분</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='create_record_routine'>
                            <div className='create_record_title'>
                                <div>today's routine</div><></>
                            </div>
                            <div className='create_record_sub_body'></div>
                        </div>
                        <div className='create_record_image'>
                            <div className='create_record_title'>
                                <div>photo of the day</div>
                                <UploadImage imageSrc={imageSrc} setImageSrc={setImageSrc} addRecordData={addRecordData} setAddRecordData={setAddRecordData}/>
                            </div>
                            {addRecordData['img']
                            ?<div className='create_record_sub_body'><img alt='사진 미리보기' src={imageSrc}/></div>
                            :<div className='create_record_sub_body'>등록된 사진이 없습니다.</div>}
                        </div>
                        <div className='create_record_comment'>
                            <div className='create_record_title'>
                                <div>comment of the day</div><></>
                            </div>
                            <div className='create_record_sub_body'>
                                <textarea value={addRecordData['comment']} placeholder='오늘 운동은 어떠셨나요?' onChange={inputComment}/>
                            </div>
                        </div>
                    </div>
                    <div className='create_record_footer'>
                        <button>취소</button>
                        <button>저장</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CreateRecordModal;