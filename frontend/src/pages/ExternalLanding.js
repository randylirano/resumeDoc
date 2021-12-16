// eslint-disable-next-line no-unused-vars
import React from "react";
import "../stylesheets/landing.css";
import ExternalNavBar from "../components/ExternalNavBar";
import { useNavigate, Link } from "react-router-dom";
import "../stylesheets/external.css";
import img from "../images/handshake.jpg";

// written by: Kennedy C. Ezumah

const ExternalLanding = () => {
  /**
   * Main external facing page
   */
  const navigate = useNavigate();
  return (
    <div className="container" id="external-parent">
      <div className="row">
        <ExternalNavBar />
        <center>
          <h1 id="external-tag-line">ResumeDoc, the Smart Resume Tool</h1>
        </center>
      </div>

      <div className="row" id="landing-content">
        <div className="row">
          <div className="col-4" id="left-side-landing">
            <div id="main-messages">
              <h2 id="home-message-one">
                <p>
                  Build a Compelling, Professional Tech Resume{" "}
                  <em>in Minutes</em>
                </p>
              </h2>
              <h2 id="home-message-two">
                <p>Your Next Opportunity Starts Here</p>
              </h2>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-info"
                id="external-sign-in-button"
                onClick={() => navigate("/login")}
              >
                Create a Free Account
              </button>
            </div>
            <div>
              <Link to="/login">I already Have an Account</Link>
            </div>
          </div>
          <div className="col-8">
            <div className="row border" id="external-images">
              <img
                src={img}
                width="900"
                height="600"
                alt="An image of a young woman shaking hands with a prospective employer. Both are smiling."
              />
            </div>
          </div>
          <footer>
            <center>© 2021 ResumeDoc</center>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ExternalLanding;
