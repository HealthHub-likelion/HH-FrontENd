import '../styles/sessions/RecordSession.css';
import RecordsState from '../components/RecordsState';
import WaveElement from '../components/WaveElement';
import proxy from '../security/Proxy.json';
import axios from 'axios';
import { useEffect, useState } from 'react';

function RecordSession() {

    const [myList,setMyList] = useState([]);
    const token = localStorage.getItem('HH_token');

    const axiosRecords = () =>{
        axios.get(`${proxy['proxy_url']}/record/mylist/`,{
            headers:{
                Authorization : token
            }
        })
        .then((res)=>{
            //console.log(res);
            setMyList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axiosRecords();
    },[]);

    function getDate(create_time){
        return create_time.substr(0,10);

    }

    return (
        <div className = 'RecordSession'>
            <div className='recordSession_recordsState'>
                <RecordsState/>
            </div>
            <div className='recordSession_wavesWindow'>
                <div className='wavesWindow_header'>
                    <div className = 'wavesWindow_header_title'>WAVES</div>
                    <div className = 'wavesWindow_header_recordsCnt'>{myList.length} records</div>
                </div>
                <div className = 'wavesWindow_content'>
                    {
                        myList.map((e,i)=>{
                            return(
                                <WaveElement key = {i}
                                record_img = {e.record_img}
                                routine_name = {e.routine_name}
                                create_time = {getDate(e.record_create_time)}
                                comment = {e.record_comment}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default RecordSession;