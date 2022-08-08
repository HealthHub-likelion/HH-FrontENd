import '../styles/components/Wave.css'

function Wave({waveLevel}) {
    console.log(waveLevel);
    return (
        <div className="Wave">
            <div className='ocean'>
                <div className="wave_element"></div>
                <div className="wave_element"></div>
            </div>
        </div>
    );
}

export default Wave;