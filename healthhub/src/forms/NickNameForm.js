import { useRef, useState } from 'react';
import '../styles/forms/NickNameForm.css';

function NickNameForm({ username }) {
    const textareaRef = useRef();

    const [nicknameContent, setNickNameContent] = useState('');

    const saveUpdate = () => {
        if (nicknameContent === '') {
            textareaRef.current.focus();
            return;
        }
        else {
            if (window.confirm('변경하시겠습니까?')) {
                window.location.replace(`/${nicknameContent}/Settings`);
            }
        }
    }

    const onNickNameChange = (event) => {
        setNickNameContent(event.currentTarget.value);
    };

    return (
        <div className="NickNameForm">
            <div className="nicknameform_title">
                <div>NickName</div>
            </div>
            <div className='nicknameform_nickname'>
                <input
                    ref={textareaRef}
                    onChange={onNickNameChange}
                    value={nicknameContent}
                    placeholder={username}>
                </input>
                <button onClick={() => saveUpdate()}>확인</button>
            </div>
        </div>
    )
}

export default NickNameForm;