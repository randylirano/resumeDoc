// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBarOther from "../components/NavBarOther";
import UxUiDashboardContentBox from "../components/UxUiDashboardContentBox";
import "../stylesheets/swe-dashboard.css";

// Written by Kennedy Ezumah

const UxUiDashboard = (props) => {
  /*
    UxUiDashboard: component responsible for displaying the UXUI dashboard page
    params: takes an object with key-value pair of login_email as a parameter
    imported-components: NavBarOther, UxUiDashBoardContentBox
  */
  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={props.login_email} />
        <UxUiDashboardContentBox login_email={props.login_email} />
      </div>
    </div>
  );
};

export default UxUiDashboard;
