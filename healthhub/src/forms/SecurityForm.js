import '../styles/forms/SecurityForm.css';

function SecurityForm({ dataPrivate, setdataPrivate }) {
    const setPrivate = () => {
        return dataPrivate ? 'private_button_clicked' : 'private_button';
    }
    const setPublic = () => {
        return dataPrivate ? 'public_button' : 'public_button_clicked';
    }

    return (
        <div className="SecurityForm">
            <div className="securityform_title">
                Security
            </div>
            <div className='securityform_button'>
                <button className={setPrivate()} onClick={() => setdataPrivate(true)}>
                    private
                </button>
                <button className={setPublic()} onClick={() => setdataPrivate(false)}>
                    public
                </button>
            </div>
        </div>
    )
}

export default SecurityForm;