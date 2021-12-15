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
    console.log("`{resume.Title}`resume deleted");

    // delete resume
    resume.author = login_email;
    const res = await fetch("api/swe/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });

    if (res.ok) {
      console.log("Resume successfully deleted!");
      navigate("/swe", {
        state: { login_email: login_email },
      });
    } else {
      alert("Deletion unsucessful");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <NavBarOther login_email={login_email} />
        <center>
          <div class="card text-center" id="view-box">
            <div class="card-header">
              <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                  <Button class="nav-link active" href="#">
                    Active
                  </Button>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">{resume.resumeTitle}</h5>
              <p class="card-text">Randy's Function Here</p>
              <Button
                class="btn btn-primary"
                id="delete-button"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default ViewSweResumePage;
