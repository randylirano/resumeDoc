// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";
import NavBarOther from "../components/NavBarOther";
import PmDashboardContentBox from "../components/PmDashboardContentBox";
import "../stylesheets/pm-dashboard.css";

// Author: Randy Lirano

const PmDashboardPage = () => {
  const location = useLocation();
  const login_email = location.state.login_email;

  console.log("HERE", login_email);
  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={login_email} />
        <PmDashboardContentBox login_email={login_email} />
      </div>
    </div>
  );
};

export default PmDashboardPage;
