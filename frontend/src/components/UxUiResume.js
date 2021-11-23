// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory } from "react-router-dom";
import "../stylesheets/landing.css";
import img from "../images/ux-ui.png";
// Written by Kennedy Ezumah

const UxUiResume = () => {
  /*
    uxUiResume: component responsible for displaying the UX/UIresume
    routes: redirects to ux/ui dashboard page with click of "UX/UI Design" button
  */

  function printMessage() {
    console.log("Switching page to UXUI view");
  }

  return (
    <div className="col-4">
      <center>
        <img
          src={img}
          alt="an icon showing a cartoon of a paint palette."
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
          UX/UI Design
        </button>
      </center>
    </div>
  );
};

export default UxUiResume;
