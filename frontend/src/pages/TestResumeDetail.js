import { useLocation } from "react-router-dom";
import NavBarOther from "../components/NavBarOther";
// eslint-disable-next-line no-unused-vars
import ResumeDetail from "../components/ResumeDetail.js";
import "../stylesheets/pm-dashboard.css";

// Author: Randy Lirano

const TestResumeDetail = () => {
  const location = useLocation();
  const login_email = location.state.login_email;
  const resume = location.state.resume;

  // console.log("ACTIVE USER:", login_email);
  // console.log("RECEIVED RESUME", resume);
  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={login_email} />
        <ResumeDetail resume={resume} />
      </div>
    </div>
  );
};

export default TestResumeDetail;
