// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";
import NavBarOther from "../components/NavBarOther";
import UxUiDashboardContentBox from "../components/UxUiDashboardContentBox";
import "../stylesheets/swe-dashboard.css";

// Written by Kennedy Ezumah

const UxUiDashboard = () => {
  /*
    UxUiDashboard: component responsible for displaying the UXUI dashboard page
    params: Other pages can redirect to this page by using the navigate 
                method and passing the state object as a parameter of the form:
                "{ state: { login_email: login_email } }"
    imported-components: NavBarOther, UxUiDashBoardContentBox
  */

  const location = useLocation();
  const login_email = location.state.login_email;
  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={login_email} />
        <UxUiDashboardContentBox login_email={login_email} />
      </div>
    </div>
  );
};

export default UxUiDashboard;
