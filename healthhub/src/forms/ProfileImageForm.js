import '../styles/forms/ProfileImageForm.css';

function ProfileImageForm() {
    const [imgBase64, setImgBase64] = useState([]); // 파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일	

    const uploadImage = () => {

    }

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