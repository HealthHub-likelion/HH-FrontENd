import '../styles/forms/NickNameForm.css';

function NickNameForm({ username }) {

    return (
        <div className="NickNameForm">
            <div className="nicknameform_title">
                NickName
            </div>
            <div className='nicknameform_nickname'>
                <input
                    placeholder={username}>
                </input>
                <button>확인</button>
            </div>
        </div>
    )
}

export default NickNameForm;