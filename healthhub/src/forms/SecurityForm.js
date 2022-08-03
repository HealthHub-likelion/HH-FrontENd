import '../styles/forms/SecurityForm.css';

function SecurityForm() {

    return (
        <div className="SecurityForm">
            <div className="securityform_title">
                Security
            </div>
            <div className='securityform_button'>
                <button
                    type="button"
                    // onClick={()=>}
                    className="securityform_button_private"
                >
                    private
                </button>
                <button
                    type="button"
                    // onClick={()=>}
                    className="securityform_button_public">
                    public
                </button>
            </div>
        </div>
    )
}

export default SecurityForm;