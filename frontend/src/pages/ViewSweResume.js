// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory, useLocation } from "react-router-dom";
// eslint-disable-next-line
import UxUiResume from "../components/UxUiResume";
// eslint-disable-next-line no-unused-vars
import NavBarOther from "../components/NavBarOther";
import "../stylesheets/landing.css";

// Written by Kennedy Ezumah

const ViewSweResume = () => {
  const location = useLocation();
  const login_email = location.state.login_email;
  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={login_email} />
        <center>
          <h4>***Replace with Resume.Title***</h4>
          <iframe
            src="https://developer.mozilla.org/en-US/docs/Glossary"
            width="100%"
            height="500"
            allowfullscreen
            sandbox
          ></iframe>
        </center>
      </div>
    </div>
  );
};

export default ViewSweResume;
