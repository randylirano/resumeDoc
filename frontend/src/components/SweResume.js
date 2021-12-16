// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "../stylesheets/landing.css";
import img from "../images/swe.png";
// Written by Kennedy Ezumah

const SweResume = (props) => {
  /*
    sweResume: component responsible for displaying the swe resume
    params: recieves login email as a parameter and saves it as a state variable
    routes: redirects to SWE page with click of "SWE" button
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
          alt="an icon showing a cartoon of three people working around an open laptop. There is code on the screen."
          width="350"
          height="350"
        />
      </center>
      <center>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() =>
            navigate("/swe", { state: { login_email: login_email } })
          }
        >
          Software Development
        </button>
      </center>
    </div>
  );
};

export default SweResume;
