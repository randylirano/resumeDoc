// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavBarOther from "../components/NavBarOther";
// eslint-disable-next-line no-unused-vars
import { Card, Row, Col, Container } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "../stylesheets/landing.css";
import "../components/ResumeTemplateResources/ResumeTemplate.css";
import ResumeDetail from "../components/ResumeDetail.js";

// Written by Randy Lirano

const ViewPmResumePage = () => {
  const location = useLocation();
  const login_email = location.state.login_email;
  const resume = location.state.resumeObject;
  const navigate = useNavigate();

  const handleDelete = async (event) => {
    event.preventDefault();

    // delete resume
    resume.author = login_email;
    const res = await fetch("api/pm/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });

    if (res.ok) {
      console.log(
        "Resume successfully deleted! Redirecting to PM listings page!"
      );
      navigate("/pm", {
        state: { login_email: login_email },
      });
    } else {
      alert("Deletion unsuccessful");
    }
  };

  const handleReturn = async (event) => {
    event.preventDefault();
    navigate("/pm", {
      state: { login_email: login_email },
    });
  };

  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={login_email} />
        <center>
          <h1 id="page-heading">Resume View</h1>
          <div className="card text-center" id="view-box">
            <div className="card-header">
              <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                  <Button
                    className="btn btn-primary"
                    id="delete-button"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn btn-primary"
                    id="return-button"
                    onClick={handleReturn}
                  >
                    Return to Previous Page
                  </Button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">{resume.resumeTitle}</h5>
              <div className="card-text"><ResumeDetail resume={resume} /></div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default ViewPmResumePage;
