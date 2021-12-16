// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory, useLocation } from "react-router-dom";
// eslint-disable-next-line
import UxUiResume from "../components/UxUiResume";
// eslint-disable-next-line no-unused-vars
import NavBarOther from "../components/NavBarOther";
// import CreatePmResume from "../components/CreatePmResume";
import ResumeForm from "../components/ResumeForm.js";
import "../stylesheets/landing.css";

// Author: Randy Lirano

const CreatePmResumePage = () => {
  const location = useLocation();
  const login_email = location.state.login_email;

  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={login_email} />
        {/*<CreatePmResume login_email={login_email} />*/}
        <ResumeForm login_email={login_email} />
      </div>
    </div>
  );
};

export default CreatePmResumePage;