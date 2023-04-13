import { useEffect, useState } from 'react';
import '../styles/components/RoutineGraph.css';

function RoutineGraph({ curRoutine }) {
    const [graphData, setGraphData] = useState({
        min: Infinity,
        max: 0
    })
    useEffect(() => {
        let tmin = Infinity, tmax = 0;;
        for (let i = 0; i < curRoutine.length; i++) {
            if (curRoutine[i].allWeight < tmin) tmin = curRoutine[i].allWeight;
            if (curRoutine[i].allWeight > tmax) tmax = curRoutine[i].allWeight;
        }
        const redundancy = parseInt(tmax / 10);
        setGraphData({min: tmin - redundancy, max: tmax + redundancy});
    }, [curRoutine]);

    console.log(curRoutine);

    const numMark = () => {
        let mark = [];
        let interval = parseInt((graphData.max - graphData.min) / 6)
        mark.push(<div>{graphData.max}</div>);
        for(let i = 1; i < 7; i++){
            mark.push(<div>{graphData.max - (interval * i)}</div>);
        }
        return mark;
    }
    const verticTable = (idx) => {
        const percent = 100 * curRoutine[idx].allWeight / graphData.max;

        let vertic = [];
        for(let i = 0; i < 7; i++){
            vertic.push(<div className='column'><div className='line'/></div>);
        }
        vertic.push(<div className='lastColumn'>{curRoutine[idx].time[8] + curRoutine[idx].time[9]}</div>);
        vertic.push(<div className='circle' style={{bottom: `${66 + parseInt(percent * 1.8)}px`}}></div>);
        return vertic;
    }
    const horizonTable = () => {
        let horizon = [];
        for(let i = 0; i < curRoutine.length; i++){
            horizon.push(<div>
                {verticTable(i)}
            </div>);
        }
        return horizon;
    }

    return (
        <div className="RoutineGraph">
            <div>
                {numMark()}
            </div>
            <div>
                {horizonTable()}
            </div>
        </div>
    );
}

export default RoutineGraph;