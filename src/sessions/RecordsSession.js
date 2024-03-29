import '../styles/sessions/RecordSession.css';
import RecordsState from '../components/RecordsState';
import WaveElement from '../components/WaveElement';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SmallSliceContainer from '../components/background/SmallSliceBG';

function RecordSession({ userData, setUserData }) {

    const [myList, setMyList] = useState([]);
    const [consecutiveDay, setConsecutiveDay] = useState(0);
    const token = localStorage.getItem('HH_token');

    const axiosRecords = () => {
        axios.get(`${process.env.REACT_APP_PROXY}/record/mylist/`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                // console.log(res);
                setMyList(res.data);
            })
            .catch((err) => {
                // console.log(err);
            })
    }

    useEffect(() => {
        axiosRecords();
    }, []);

    function getDate(create_time) {
        return create_time.substr(0, 10);
    }

    function getConsecutive() {
        let count = 0;
        const offset = new Date().getTimezoneOffset() * 60000;
        const today = new Date(Date.now() - offset);
        let getToday = new Date(today.toISOString().substring(0, 10) + " 00:00:00");
        latest(myList).map((e) => {
            if (Math.ceil((getToday.getTime() - new Date(e.record_create_time.substring(0, 10) + " 00:00:00").getTime()) / (1000 * 3600 * 24)) === 1) {
                today.setDate(today.getDate() - 1);
                getToday = new Date(today.toISOString().substring(0, 10) + " 00:00:00");
                count += 1;
            }
        })
        return count;
    }

    useEffect(() => {
        setConsecutiveDay(getConsecutive());
    })

    function latest(feed_myList) {
        const latestList = [...feed_myList];
        latestList.sort((a, b) => {
            return b.record_id - a.record_id;
        })
        return latestList;
    }

    return (
        <div className='RecordSession'>
            <div className='recordSession_recordsState'>
                <SmallSliceContainer>
                    <RecordsState entireWave={myList.length} getConsecutive={consecutiveDay} />
                </SmallSliceContainer>
            </div>
            <div className='recordSession_wavesWindow'>
                <div className='wavesWindow_header'>
                    <div className='wavesWindow_header_title'>WAVES</div>
                    <div className='wavesWindow_header_recordsCnt'>{myList.length} records</div>
                </div>
                <div className='wavesWindow_content'>
                    {myList.length > 0 ?
                        latest(myList).map((e, i) => {
                            return (
                                <WaveElement key={i}
                                    userData={userData}
                                    setUserData={setUserData}
                                    record_id={e.record_id}
                                    record_img={e.record_img}
                                    record_like_user={e.record_like_user}
                                    routine_name={e.routine_name}
                                    create_time={getDate(e.record_create_time)}
                                    comment={e.record_comment}
                                    member_nickname={e.member_nickname}
                                    member_img={e.member_img}
                                    isOpen={e.routine_isOpen}
                                    routineId={e.routine_id}
                                    pre='wave'
                                />
                            )
                        }) :
                        <div className='record_empty'>오늘은 어떤 운동을하셨나요?</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default RecordSession;