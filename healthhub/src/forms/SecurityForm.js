import axios from 'axios';
import proxy from '../security/Proxy.json';
import '../styles/forms/SecurityForm.css';

function SecurityForm({ dataPrivate, setdataPrivate }) {
    const token = localStorage.getItem('HH_token');

    /* Security Patch */
    const switchSecurity = (security) => {
        axios.patch(`${proxy['proxy_url']}/accounts/member/`, {
            // 바디 부분
            isOpen: security
        }, {
            // 헤더 부분
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                // 잘 불러와졌을때
                console.log('patch', res.data);
            })
            .catch((err) => {
                // 오류 나왓을 때
                console.log(err);
            })

        getState();
    }

    const getState = () => {
        // 변경 확인
        axios.get(`${proxy['proxy_url']}/accounts/getsettingoption`, {
            // 헤더 부분
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                // 잘 불러와졌을때
                console.log('get isOpen', res.data.status.isOpen);
            })
            .catch((err) => {
                // 오류 나왓을 때
                console.log(err);
            })
    }


    /* 버튼 활성화 변경 */
    const setPrivate = () => {
        return dataPrivate ? 'private_button_clicked' : 'private_button';
    }
    const setPublic = () => {
        return dataPrivate ? 'public_button' : 'public_button_clicked';
    }

    return (
        <div className="SecurityForm">
            <div className="securityform_title">
                <div>Security</div>
            </div>
            <div className='securityform_button'>
                <button className={setPrivate()} onClick={() => { setdataPrivate(true); switchSecurity(false); }}>
                    private
                </button>
                <button className={setPublic()} onClick={() => { setdataPrivate(false); switchSecurity(true); }}>
                    public
                </button>
            </div>
        </div>
    )
}

export default SecurityForm;