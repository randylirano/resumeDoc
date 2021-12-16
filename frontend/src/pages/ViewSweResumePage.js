// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useHistory, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line
import UxUiResume from "../components/UxUiResume";
import Button from "react-bootstrap/Button";
// eslint-disable-next-line no-unused-vars
import NavBarOther from "../components/NavBarOther";
// eslint-disable-next-line no-unused-vars
import { Card, Row, Col, Container } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "../stylesheets/landing.css";
import "../components/ResumeTemplateResources/ResumeTemplate.css";

// Written by Kennedy Ezumah

const ViewSweResumePage = () => {
  const location = useLocation();
  const login_email = location.state.login_email;
  const resume = location.state.resumeObject;
  const navigate = useNavigate();

  const handleDelete = async (event) => {
    event.preventDefault();

    // delete resume
    resume.author = login_email;
    const res = await fetch("api/swe/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });

    if (res.ok) {
      console.log(
        "Resume successfully deleted! Redirecting to swe listings page!"
      );
      navigate("/swe", {
        state: { login_email: login_email },
      });
    } else {
      alert("Deletion unsuccessful");
    }
  };

  const handleReturn = async (event) => {
    event.preventDefault();
    navigate("/swe", {
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
              <p className="card-text">Randy's function goes here</p>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default ViewSweResumePage;
