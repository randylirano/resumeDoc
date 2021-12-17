import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/swe-dashboard.css";
import img from "../images/resumedoc-logo.png";
import "../stylesheets/swe-dashboard.css";

// Written by Kennedy Ezumah
//Shujun: proptype check may needed
function NavBarOther(props) {
  /* 
    navBarOther: component responsible for displaying the non-landing page navigation bar
            This method should be called upon every internal page transition 
            beyond the landing page. login_email should be set as a parameter  
    param: login_email, default value is "DEFAULT"
    routes: redirects to login page with click of "logout" button
            redirects to landing page with click of "home" button
  */

  // function for changing pages
  const navigate = useNavigate();

  const [visibleEmail] = useState(props.login_email);
  return (
    <div className="row" role="navigation" id="NavBar">
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
            onClick={() => navigate("/")}
          >
            Logout
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            id="home-button"
            onClick={() =>
              navigate("/landing", {
                state: { login_email: props.login_email },
              })
            }
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
