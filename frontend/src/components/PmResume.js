// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory } from "react-router-dom";
import "../stylesheets/landing.css";
import img from "../images/pm.png";

// Written by Kennedy Ezumah

const PmResume = () => {
  /*
    pmResume: component responsible for displaying the PM resume
    routes: redirects to PM page with click of "logout" button
  */

  function printMessage() {
    console.log("Switching page to PM view");
  }

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
          onClick={printMessage}
        >
          Product Management
        </button>
      </center>
    </div>
  );
};

export default PmResume;
