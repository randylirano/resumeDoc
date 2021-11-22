// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBarOther from "../components/NavBarOther";
import SweDashboardContentBox from "../components/SweDashboardContentBox";
import "../stylesheets/swe-dashboard.css";

// Written by Kennedy Ezumah

const SweDashboard = (props) => {
  /*
    SweDashboard: component responsible for displaying the SWE dashboard page
    params: takes an object with key-value pair of login_email as a parameter
    imported-components: NavBarOther, SweDashBoardContentBox
  */
  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={props.login_email} />
        <SweDashboardContentBox login_email={props.login_email} />
      </div>
    </div>
  );
};

export default SweDashboard;
