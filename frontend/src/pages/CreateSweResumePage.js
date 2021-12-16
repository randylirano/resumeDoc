// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory, useLocation } from "react-router-dom";
// eslint-disable-next-line
import UxUiResume from "../components/UxUiResume";
// eslint-disable-next-line no-unused-vars
import NavBarOther from "../components/NavBarOther";
// import CreateSweResume from "../components/CreateSweResume";
import SweResumeForm from "../components/SweResumeForm.js";
import "../stylesheets/landing.css";

// Written by Kennedy Ezumah

const CreateSweResumePage = () => {
  const location = useLocation();
  const login_email = location.state.login_email;

  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={login_email} />
        {/* <CreateSweResume login_email={login_email} /> */}
        <SweResumeForm login_email={login_email} />
      </div>
    </div>
  );
};

export default CreateSweResumePage;
