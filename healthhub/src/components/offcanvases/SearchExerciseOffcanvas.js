import '../../styles/components/offcanvases/SearchExerciseOffcanvas.css'
import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import proxy from '../../security/Proxy.json'

function SearchExerciseOffcanvas(props) {
    // ===== 임시 데이터 ===== 
    const [exerciseCategory] = useState([
        {
            ko_name: "케이블 크로스 오버",
            en_name: "Cable Crossover",
            part: "가슴"
        },
        {
            ko_name: "스트레칭",
            en_name: "Stretching",
            part: "기타"
        },
        {
            ko_name: "박스 점프",
            en_name: "Box Jump",
            part: "다리"
        },
        {
            ko_name: "백 익스텐션",
            en_name: "Back Extension",
            part: "등"
        },
        {
            ko_name: "아놀드 프레스",
            en_name: "Arnold Press",
            part: "어깨"
        },
        {
            ko_name: "배틀 로프",
            en_name: "Battle Ropes",
            part: "유산소"
        },
        {
            ko_name: "버피",
            en_name: "Burpee",
            part: "전신"
        },
        {
            ko_name: "케이블 크런치",
            en_name: "Cable Crunch",
            part: "코어"
        },
        {
            ko_name: "벤치 딥",
            en_name: "Bench Dip",
            part: "팔"
        },
    ])

    const [partList] = useState(['전체', '가슴', '등', '다리', '어깨', '팔', '유산소', '전신', '코어', '기타'])
    const [clickedPart, setClickedPart] = useState('전체');
    const [selectEcercise, setSeletEcercise] = useState('');
    const [inputExercise, setInputExercise] = useState('');

    const showPart = partList.map(part=><button key={part} className={clickedPart===part?'clickedPart':'clickPart'}
                                                onClick={()=>{setClickedPart(part)}}>{part}</button>);

    const sortAry =(list)=>{
        list.sort(function(a, b){
            const upperCaseA = a['en_name'].toUpperCase();
            const upperCaseB = b['en_name'].toUpperCase();
            
            if(upperCaseA > upperCaseB) return 1;
            if(upperCaseA < upperCaseB) return -1;
            if(upperCaseA === upperCaseB) return 0;
        });

        return list;
    }

    const inputName = (e) =>{
        setInputExercise(e.target.value);
    }

    const showExercise = () =>{
        let filterList;

        if(clickedPart !== '전체'){
            filterList = exerciseCategory.filter(exercise => exercise['part'] === clickedPart);
        }
        else{
            filterList = exerciseCategory.slice();
        }
        if(inputExercise!==''){
            filterList = filterList.filter(exercise => {
                const upperCaseEN = exercise['en_name'].toUpperCase();
                const lowerCaseEN = exercise['en_name'].toLowerCase();
                const caseEN = exercise['en_name'];
                const caseKO = exercise['ko_name'];
                
                return upperCaseEN.includes(inputExercise) || caseEN.includes(inputExercise) 
                || caseKO.includes(inputExercise) || lowerCaseEN.includes(inputExercise);
            })
        }

        filterList = sortAry(filterList);

        const showExercise = [];
        
        if(filterList.length > 0){
            for(let i = 0; i < filterList.length; i++){
                showExercise.push(
                    <div key={i} className={selectEcercise===filterList[i]['en_name']?'select_exercise_box':'search_exercise_box'}
                        onClick={()=>{setSeletEcercise(filterList[i]['en_name'])}}>
                        <div>
                            <div className='search_exercise_en'>
                                {filterList[i]['en_name']}
                            </div>
                            <div className='search_exercise_ko'>
                                {filterList[i]['ko_name']}
                            </div>
                        </div>
                        <div className='search_exercise_right'>
                            <div className='search_exercise_part'>
                                {filterList[i]['part']}
                            </div>
                            <img alt='정보' src={`${proxy['proxy_url']}/media/images/icons/HH_icon_info.png`}/>
                        </div>
                    </div>
                );
            }
        }
        else{
            showExercise.push(
                <div key='empty' className='emptyBox'>
                    검색 결과가 없습니다.
                </div>
            );
        }
        

        return showExercise;
    }

    return (
        <div className="SearchExerciseOffcanvas">
            <Offcanvas {...props} placement='end' className='search_exercise_offcanvas'>
                <Offcanvas.Header className='search_exercise_header'>
                    <Offcanvas.Title className='search_exercise_title'>Exercises</Offcanvas.Title>
                    <div>{showPart}</div>
                    <div className='search_exercise_inputBox'>
                        <input value={inputExercise} placeholder='운동명을 검색해보세요.'
                                onChange={inputName}/>
                        <img alt='검색' src={`${proxy['proxy_url']}/media/images/icons/HH_icon_search.png`}/>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <div className='search_exercise_body'>{showExercise()}</div>
                    <div className='search_exercise_footer'>
                        <button className='search_footer_cancel'>취소</button>
                        <button className='search_footer_right'>확인</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default SearchExerciseOffcanvas;