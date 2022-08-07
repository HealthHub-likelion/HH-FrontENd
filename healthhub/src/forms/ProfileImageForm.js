import '../styles/forms/ProfileImageForm.css';

function ProfileImageForm() {

    return (
        <div className="ProfileImageForm">
            <div className="profileimageform_title">
                <div>Profile Image</div>
            </div>
            <div className='profileimageform_button'>
                <button
                    type="button"
                    // onClick={()=>}
                    className="profileimageform_button_upload"
                >
                    프로필 사진 업로드
                </button>
                <button
                    type="button"
                    // onClick={()=>}
                    className="profileimageform_button_delete">
                    사진 삭제
                </button>
            </div>
        </div>
    )
}

export default ProfileImageForm;