import '../styles/sessions/RecordSession.css';
import RecordsState from '../components/RecordsState';
import WaveElement from '../components/WaveElement';

function RecordSession() {
    return (
        <div className = 'RecordSession'>
            <div className='recordSession_recordsState'>
                <RecordsState/>
            </div>
            <div className='recordSession_wavesWindow'>
                <div className='wavesWindow_header'>
                    <div className = 'wavesWindow_header_title'>WAVES</div>
                    <div className = 'wavesWindow_header_recordsCnt'>24 records</div>
                </div>
                <div className = 'wavesWindow_content'>
                    <WaveElement/>
                    <WaveElement/>
                    <WaveElement/>
                </div>
            </div>
        </div>
    );
}

export default RecordSession;