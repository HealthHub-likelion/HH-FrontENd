import { useState } from 'react';
import axios from 'axios';
import proxy from '../security/Proxy.json';
import ProfileImageModal from '../components/modals/ProfileImageModal';
import '../styles/forms/ProfileImageForm.css';

function ProfileImageForm({ userData }) {
    const [showUploadProfile, setShowUploadProfile] = useState(false);

    const token = localStorage.getItem('HH_token');

    const deleteProfileImage = () => {
        // 프로필 이미지 삭제
        axios.post(`${proxy['proxy_url']}/accounts/profileimage/delete`, {
            // 헤더 부분
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                // 잘 불러와졌을때
                console.log(res);
            })
            .catch((err) => {
                // 오류 나왓을 때
                console.log(err);
            })
    }

    const deleteConfirm = () => {
        if (userData['img'] == '/media/images/HH_logo.jpg') {
            alert('등록된 이미지가 없습니다.')
        }
        else {
            if (window.confirm('사진을 삭제하시겠습니까?')) {
                deleteProfileImage();
            }
        }
    }

    return (
        <div className="ProfileImageForm">
            <div className="profileimageform_title">
                <div>Profile Image</div>
            </div>
            <div className='profileimageform_button'>
                <button
                    type="button"
                    onClick={() => { setShowUploadProfile(true) }}
                    className="profileimageform_button_upload"
                >
                    프로필 사진 업로드
                </button>
                <button
                    type="button"
                    onClick={() => { deleteConfirm() }}
                    className="profileimageform_button_delete">
                    사진 삭제
                </button>
                <ProfileImageModal
                    show={showUploadProfile}
                    onHide={() => { setShowUploadProfile(false) }}
                    userdata={userData}
                />
            </div>
        </div>
    )
}

export default ProfileImageForm;