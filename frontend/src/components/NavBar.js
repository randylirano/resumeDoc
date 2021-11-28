// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import "../stylesheets/landing.css";
import img from "../images/resumedoc-logo.png";
// Written by Kennedy Ezumah

function NavBar() {
  /* 
    navBar: component responsible for displaying the navigation bar
            This method should be called upon successful login and the login_email 
            should be set as a parameter  
    param: login_email, default value is "DEFAULT"
    routes: redirects to login page with click of "logout" button
  */

  // function printMessage() {
  //   console.log("Switching page to logout view");
  // }

  const navigate = useNavigate();

  let { useremail } = useParams();

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
          Online: {useremail}
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
        </div>
      </div>
    </div>
  );
}

// set default value
NavBar.defaultProps = {
  login_email: "DEFAULT",
};

export default NavBar;
