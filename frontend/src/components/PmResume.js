// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "../stylesheets/landing.css";
import img from "../images/pm.png";
// Written by Randy Lirano

const PmResume = (props) => {
  /*
    pmResume: component responsible for displaying the PM resume
    routes: redirects to PM page with click of "PM" button
  */

  // function for changing pages
  const navigate = useNavigate();

  // save login email as a state variable
  const [login_email] = useState(props.login_email);

  return (
    <div className="col-4">
      <center>
        <img
          src={img}
          alt="an icon showing a cartoon of three teammates at work. Two are holding laptops, while the third is holding a cup of coffee."
          width="200"
          height="200"
        />
      </center>
      <center>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() =>
            navigate("/pm", { state: { login_email: login_email } })
          }
        >
          Product Management
        </button>
      </center>
    </div>
  );
};

export default PmResume;
