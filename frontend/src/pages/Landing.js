// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory, useLocation } from "react-router-dom";
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

const Landing = () => {
  /*
    landingPage: component responsible for displaying the landing page
                Other pages can redirect to this page by using the navigate 
                method and passing the state object as a parameter of the form:
                "{ state: { login_email: login_email } }"
    imported-components: PmResume, SweResume, NavBar, UxUiResume
  */

  const location = useLocation();
  const activeUser = location.state.login_email;

  return (
    <div className="container">
      <div className="row">
        <NavBar login_email={activeUser} />
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
          <SweResume login_email={activeUser} />
          <UxUiResume login_email={activeUser} />
          <PmResume login_email={activeUser} />
          <footer>
            <center>© 2021 ResumeDoc</center>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Landing;
