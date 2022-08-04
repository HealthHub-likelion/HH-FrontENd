import '../styles/components/RoutineBox.css'

function RoutineBox({routinesList}) {
    const showRoutines = () =>{
        const list = [];
        
        for(let i = 0; i < routinesList.length; i++){
            list.push(
                <div className='routineBox'>
                    <div className='routineBox_top'>
                        <div className='routineBox_left'>
                            <div className='routineBox_title'>
                                {routinesList[i]['routine_name']}
                            </div>
                            {routinesList[i]['state']==='private'
                            &&<img alt='공개여부' src='images/icons/HH_icon_security.png'/>}
                        </div>
                        <div className='routineBox_right'>
                            {routinesList[i]['record_count']} records
                        </div>
                    </div>
                    <div className='routineBox_bottom'>
                        latest_date: {routinesList[i]['latest_date']}
                    </div>
                </div>
            )
        }
        list.push(
            <div className='routineBox_plus'><img alt='플러스' src='images/icons/HH_icon_plus.png'/></div>
        )

        return list;
    }

    return (
        <div className="RoutineBox">
            {showRoutines()}
        </div>
    );
}

export default RoutineBox;