import '../../styles/components/modals/CreateRecordModal.css';
import axios from 'axios';
import proxy from '../../security/Proxy.json';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import UploadProfile from '../UploadProfile';

function ProfileImageModal(props) {
    const [imageSrc, setImageSrc] = useState('');   // 미리보기 데이터
    const [profileImg, setProfileImg] = useState({
        img: null,
    }); // 프로필 사진 데이터

    const token = localStorage.getItem('HH_token');

    const uploadProfileImage = () => {
        axios.post(`${proxy['proxy_url']}/accounts/profileimage/upload`, {
            // 바디 부분
            img: profileImg.img[0].name
        }, {
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

        props.onHide()
    }

    const removeImage = () => {
        setImageSrc('');
        setProfileImg({ ...profileImg, img: null });
        props.onHide()
    }

    return (
        <div className="CreateRecordModal">
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='create_record_modal_body'>
                    <div className='create_record_header'>프로필 이미지</div>
                    <div className='create_record_image'>
                        <div className='create_record_title'>
                            <UploadProfile imageSrc={imageSrc} setImageSrc={setImageSrc} profileImg={profileImg} setProfileImg={setProfileImg} />
                        </div>
                        {profileImg['img']
                            ? <div className='create_record_sub_body'><img alt='사진 미리보기' src={imageSrc} /></div>
                            : <div className='create_record_sub_body'>등록된 사진이 없습니다.</div>}
                    </div>

                    <div className='create_record_footer'>
                        <button onClick={() => removeImage()}>취소</button>
                        <button onClick={() => { uploadProfileImage() }}>저장</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ProfileImageModal;