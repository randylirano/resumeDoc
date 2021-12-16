// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useHistory } from "react-router-dom";
import "../stylesheets/landing.css";
import img from "../images/ux-ui.png";
// Written by Kennedy Ezumah

const UxUiResume = (props) => {
  /*
    uxUiResume: component responsible for displaying the UX/UIresume
    param: recieves login email as a prop and saves it as a state variable
    routes: redirects to ux/ui dashboard page with click of "UX/UI Design" button
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
          alt="an icon showing a cartoon of a paint palette."
          width="350"
          height="350"
        />
      </center>
      <center>
        <button
          type="button"
          id="ux-ui-button"
          className="btn btn-info"
          onClick={() =>
            navigate("/uxui", { state: { login_email: login_email } })
          }
        >
          UX/UI Design
        </button>
      </center>
    </div>
  );
};

export default UxUiResume;
