// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import img from "../images/new-document.png";
import "../stylesheets/swe-dashboard.css";

// Written by Kennedy Ezumah

const UxUiDashboardContentBox = (props) => {
  /*
    UxUiDashboardContentBox: 
            component responsible for rendering the content box. Content box fetches and 
            displays user's UXUI resumes from the database. A backend call is made with a helper 
            function to the listening Express application to retrieve this data. If this call is 
            successful, data is shown as components. Otherwise, a "No Existing Resumes" default
            message is shown.
    params: takes an object with key-value pair of login_email as a parameter
            uses this object to perform the database query
  */

  // eslint-disable-next-line no-unused-vars
  const [userEmail] = useState(props.login_email);
  // eslint-disable-next-line no-unused-vars
  const databaseQuery = async (userEmail) => {
    // TO DO
    // perform database retrieval
    // should return pointers to resume entries if successful -> pass to redraw function
    // use Element.innerHTML selector API for #default-text
    // otherwise, should return default message

    // eslint-disable-next-line no-unused-vars
    const res = await fetch("api/swe/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userEmail),
    });

    ///if (res.ok) {

    //}
    return userEmail;
  };

  function printMessage() {
    console.log("Switching page to create new UxUiresume view");
  }

  return (
    <div className="row" id="main-content">
      <div className="row">
        <center>
          <div>
            <h1 id="main-message">UX/UI Resume Dashboard</h1>
          </div>
        </center>
        <center>
          <div>
            <h5 id="main-prompt">
              Every designer has a story. We'll help you tell yours.
            </h5>
          </div>
          <img
            src={img}
            width="40"
            height="40"
            alt="a document icon with a blue plus sign beside it"
          />
          <center>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={printMessage}
            >
              Create a New Resume
            </button>
          </center>
        </center>
      </div>
      <div className="row">
        <center>
          <div className="row border" id="section-listings">
            <center id="default-text">
              <h4>No Existing Resumes</h4>
            </center>
          </div>
        </center>
        <footer>
          <center>© 2021 ResumeDoc</center>
        </footer>
      </div>
    </div>
  );
};

export default UxUiDashboardContentBox;
