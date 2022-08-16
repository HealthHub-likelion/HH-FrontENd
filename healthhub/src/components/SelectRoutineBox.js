import '../styles/components/SelectRoutineBox.css'

const SelectRoutineBox = ({userData, setUserData, addRecordData, setAddRecordData}) => {
    console.log(userData.routine)

    const showRoutines = () => {
        
    }

    return (
        <div className='SelectRoutineBox'>
            {showRoutines()}
        </div>
    );
};

export default SelectRoutineBox;