// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory, useParams } from "react-router-dom";
// eslint-disable-next-line
import UxUiResume from "../components/UxUiResume";
// eslint-disable-next-line
import PmResume from "../components/PmResume";
// eslint-disable-next-line no-unused-vars
import SweResume from "../components/SweResume";
// eslint-disable-next-line no-unused-vars
import NavBar from "../components/NavBar";
import "../stylesheets/landing.css";

// Written by Kennedy Ezumah

const Landing = (props) => {
  /*
    landingPage: component responsible for displaying the landing page
    params: takes an object with key-value pair of login_email as a parameter
    imported-components: PmResume, SweResume, NavBar, UxUiResume
  */

  //let obj = { login_email: "inyamah@gmail.com" };
  return (
    <div className="container">
      <div className="row">
        <NavBar login_email={props.login_email} />
        <div className="row" id="main-content">
          <center>
            <div>
              <h1 id="main-message">Let's get started!</h1>
            </div>
          </center>
          <center>
            <div>
              <h5 id="main-prompt">
                Which of the following best describes <b>your goal job</b>{" "}
                function?
              </h5>
            </div>
          </center>
          <SweResume />
          <UxUiResume />
          <PmResume />
          <footer>
            <center>© 2021 ResumeDoc</center>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Landing;
