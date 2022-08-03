import React from "react";
import IndexContainer from "../components/background/indexBG";
import SignupForm from "../forms/SignupForm";
import SignupHeader from "../components/SignupHeader";
import '../styles/pages/SignupPage.css'

function SignupPage() {
    return (
      <IndexContainer>
        <div className="SignupPage">
          <SignupHeader/>
          <div className="signup_form">
            <SignupForm/>
          </div>
          <div className="signup_bottom">
            <div>Login</div>
          </div>
        </div>
      </IndexContainer>
    );
  }

  export default SignupPage;