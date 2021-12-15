// eslint-disable-next-line no-unused-vars
import React from "react";
//import { useNavigate } from "react-router-dom";
import img from "../images/resumedoc-logo.png";

function ExternalNavBar() {
  return (
    <div className="row" role="navigation" id="external-navbar">
      <div className="col-8" id="left-half-navbar">
        <h1>
          <img
            src={img}
            width="40"
            height="40"
            alt="a document icon with a blue plus sign beside it"
          />
          ResumeDoc
        </h1>
      </div>
      <div className="col-4" id="right-half-navbar"></div>
    </div>
  );
}

export default ExternalNavBar;
