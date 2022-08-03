import '../styles/components/RecordsState.css'

function RecordsState() {
    return (
        <div className="RecordsState">
            <div>지금까지 총 <span className='recordsState_entirewave'>0번의 물결</span>이 있었습니다.</div>
            <div>현재 <span className='recordsState_continuewave'>0일째 파도</span>가 치는 중입니다.</div>
        </div>
    );
}

export default RecordsState;