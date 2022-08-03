import '../styles/sessions/RecordSession.css';
import RecordsState from '../components/RecordsState';

function RecordSession() {
    return (
        <div className = 'RecordSession'>
            <div className='recordsState'>
                <RecordsState/>
            </div>
            <div className='wavesWindow'>
                <div className='wavesWindow_header'>
                    <div className = 'wavesWindow_header_title'>WAVES</div>
                    <div className = 'wavesWindow_header_recordsCnt'>24 records</div>
                </div>
                <div className = 'wavesWindow_content'>

                </div>
            </div>
        </div>
    );
}

export default RecordSession;