// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import img from "../images/new-document.png";
import "../stylesheets/swe-dashboard.css";
import { useNavigate } from "react-router-dom";
import LoadSweCard from "./LoadSweCard";

// Written by Kennedy Ezumah

const SweDashboardContentBox = (props) => {
  /*
    SweDashboardContentBox: component responsible for rendering the content box. Content box fetches 
            and displays user's SWE resumes from the database. A backend call is made with a helper 
            function to the listening Express application to retrieve this data. If this call is 
            successful, data is shown as components. Otherwise, a "No Existing Resumes" default
            message is shown.
    params: takes an object with key-value pair of login_email as a parameter
            uses this object to perform the database query
  */

  const [userEmail] = useState(props.login_email);

  const navigate = useNavigate();
  return (
    <div className="row" id="main-content">
      <div className="row">
        <center>
          <div>
            <h1 id="main-message">Software Development Resume Dashboard</h1>
          </div>
        </center>
        <center>
          <div>
            <h5 id="main-prompt">
              Every developer has a story. We'll help you tell yours.
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
              className="btn btn-info"
              onClick={() =>
                navigate("/create-swe-resume", {
                  state: { login_email: userEmail },
                })
              }
            >
              Create a New Resume
            </button>
          </center>
        </center>
      </div>
      <div className="row">
        <center>
          <div className="row border" id="section-listings">
            <center>
              <h4>
                <LoadSweCard login_email={userEmail} />
              </h4>
            </center>
          </div>
        </center>
        <footer id="external-footer">
          <center>© 2021 ResumeDoc</center>
        </footer>
      </div>
    </div>
  );
};

export default SweDashboardContentBox;
