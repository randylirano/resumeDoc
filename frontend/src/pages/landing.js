import React from "react";
import { useHistory } from "react-router-dom";
import navBar from "../components";
import uxUiResume from "../components";
import pmResume from "../components";
import sweResume from "../components";

// Written by Kennedy Ezumah

const landing = (props) => {
  /*
    landingPage: component responsible for displaying the landingPage
    params: takes an object with key-value pair of login_email as a parameter
  */

  <div className="container">
    <div className="row">
      <navBar />
      <div className="row" id="main-content">
        <center>
          <p>
            <h2 id="main-message">Let's get started!</h2>
          </p>
        </center>
        <center>
          <p>
            <h5 id="main-prompt">
              Which of the following best describes <b>your goal job</b>
              function?
            </h5>
          </p>
        </center>
        <sweResume />
        <uxUiResume />
        <pmResume />
        <footer>
          <center>© 2021 ResumeDoc</center>
        </footer>
      </div>
    </div>
  </div>;
};

export default landing;
