// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory } from "react-router-dom";
import "../stylesheets/landing.css";
import img from "../images/swe.png";
// Written by Kennedy Ezumah

const SweResume = () => {
  /*
    sweResume: component responsible for displaying the swe resume 
  */

  function printMessage() {
    console.log("Switching page to swe view");
  }

  return (
    <div className="col-4">
      <center>
        <img
          src={img}
          alt="an icon showing a cartoon of three people working around an open laptop. There is code on the screen."
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
          Software Development
        </button>
      </center>
    </div>
  );
};

export default SweResume;
