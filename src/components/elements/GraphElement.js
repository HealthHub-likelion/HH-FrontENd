import '../../styles/components/elements/GraphElement.css'
import { useEffect, useState } from 'react';
import RoutineGraph from '../RoutineGraph';

function GraphElement({testData, testGraph}) {
    const [curRoutineId, setCurRoutineId] = useState(testData.routine.length > 0?testData.routine[0].routineId:-1);
    const [curRoutine, setCurRoutine] = useState(testGraph.length > 0?testGraph[0]:'');

    useEffect(()=>{
        setCurRoutine(testGraph[curRoutineId]);
    },[curRoutineId]);

    const selectBox = () => {
        const option = [];
        testData.routine.map(x=>{
            option.push(<option key={x.routineId} value={x.routineId}>
                {x.routineName}
            </option>)
        })

        return <select name='select_routines' onChange={(e)=>setCurRoutineId(parseInt(e.target.value))}>
            {option}
        </select>
    }

    return (
        <div className="GraphElement">
            <div className='graph_header'>
                <div>Graph</div>
                {testData.routine.length > 0?selectBox():<div/>}
            </div>
            <div className='graph_body'>
                {testData.routine.length > 0
                ?<RoutineGraph curRoutine = {curRoutine}/>
                :<div className='empty_routine'>루틴이 없습니다.</div>}
            </div>
        </div>
    );
}

export default GraphElement;