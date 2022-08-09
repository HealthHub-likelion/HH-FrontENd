import { useRef, useState } from 'react';
import '../../styles/components/elements/ReadMeElement.css'
import ReadmeText from '../ReadmeText';
import proxy from '../../security/Proxy.json'

function ReadMeElement() {
    const textareaRef = useRef();

    const [readmeContent, setReadmeContent] = useState('');
    const [compareContent, setCompareContent] = useState('');
    const [readmeUpdate, setReadmeUpdate] = useState(false);

    const cancelUpdate = () =>{
        setReadmeContent(compareContent);
        setReadmeUpdate(false);
    }

    const saveUpdate = () =>{
        if(readmeContent === compareContent){
            textareaRef.current.focus();
            return;
        }
        else{
            if(window.confirm('작성하시겠습니까?')){
                setReadmeUpdate(false)
            }
        }
    }

    const showUpdate = () =>{
        setCompareContent(readmeContent);
        setReadmeUpdate(true);
    }

    return (
        <div className="ReadMeElement">
            <div className='readme_header'>
                <div className='readme_header_title'>
                    README
                </div>
                {readmeUpdate?
                <div className='update_buttongroup'>
                    <div onClick={()=>{cancelUpdate()}}>취소</div>
                    <div onClick={()=>{saveUpdate()}}>작성</div>
                </div>
                :<img src={`${proxy['proxy_url']}/media/images/icons/HH_icon_write.png`} alt='수정' onClick={()=>{showUpdate()}}/>
                }
            </div>
            <div className='ReadmeText'>
                <ReadmeText readmeContent={readmeContent}
                            setReadmeContent={setReadmeContent} 
                            update={readmeUpdate}
                            textareaRef={textareaRef}/>
            </div>
        </div>
    );
}

export default ReadMeElement;