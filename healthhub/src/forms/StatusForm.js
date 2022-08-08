import '../styles/forms/StatusForm.css';

function StatusForm() {

    return (
        <div className="StatusForm">
            <div className="statusform_title">
                <div>Status</div>
            </div>
            <div className='statusform_button'>
                <button
                    type="button"
                    // onClick={()=>}
                    className="statusform_button_logout"
                >
                    로그아웃
                </button>
                <button
                    type="button"
                    // onClick={()=>}
                    className="statusform_button_deleteaccount">
                    회원탈퇴
                </button>
            </div>
        </div>

    )
}

export default StatusForm;