import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/swe-dashboard.css";
import img from "../images/resumedoc-logo.png";
import "../stylesheets/swe-dashboard.css";

// Written by Kennedy Ezumah

function NavBarOther(props) {
  /* 
    navBarOther: component responsible for displaying the non-landing page navigation bar
            This method should be called upon every internal page transition 
            beyond the landing page. login_email should be set as a parameter  
    param: login_email, default value is "DEFAULT"
    routes: redirects to login page with click of "logout" button
            redirects to landing page with click of "home" button
  */

  function printMessageOne() {
    console.log("Switching page to logout view");
  }

  // eslint-disable-next-line no-unused-vars
  function printMessageTwo() {
    console.log("Switching page to landing page view");
  }

  // function for changing pages
  const navigate = useNavigate();

  const [visibleEmail] = useState(props.login_email);
  return (
    <div className="row" role="navigation">
      <div className="col-8" id="left-half-navbar">
        <h2>
          <img
            src={img}
            width="50"
            height="50"
            alt="a logo showing a document with a magnifying overlapping it"
          />
          ResumeDoc
        </h2>
      </div>
      <div className="col-4" id="right-half-navbar">
        <div className="col" id="logged-in-user">
          Online: {visibleEmail}
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-outline-secondary"
            id="logout-button"
            onClick={printMessageOne}
          >
            Logout
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            id="home-button"
            onClick={() => navigate("/landing")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

// set default value
NavBarOther.defaultProps = {
  login_email: "DEFAULT",
};

export default NavBarOther;
