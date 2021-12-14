import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import img from "../images/default-document.png";
import "../stylesheets/swe-dashboard.css";

// Author: Randy Lirano

// Card to display the number of resume
// export function ResumeCard({ resume }) {
//   return ();
// }

const LoadPmCard = (props) => {
  const [userEmail] = useState(props.login_email);
  const [resumeArray, setResumeArray] = useState([]);

  const defaultMessage = "No Resumes Exist";
  let userObject = { login_email: userEmail };

  // Card used to render the resume
  const renderResume = (card, index) => {
    return (
      <Card style={{ width: "10rem" }} key={index} id="individual-card">
        <Card.Img variant="top" src={img} height="100" width="75" />
        <Card.Body>
          <Card.Title>{card.resumeTitle}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    );
  };

  // Use useEffect to restrict reloading of the fetch side effect to only once after initial rendering
  useEffect(() => {
    async function loadResumes(userObject) {
      const res = await fetch("api/pm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObject),
      });
      if (await res.ok) {
        const returnedList = await res.json();
        setResumeArray(returnedList);
      } else {
        console.log("Error ocurred with loading resumes");
      }
    }
    loadResumes(userObject);
  }, []);

  // return the default message if database returns an empty array
  if (resumeArray.length == 0) {
    return <div id="default-text">{defaultMessage}</div>;
  }
  // otherwise map the array of resume objects to render them as an array
  else {
    return (
      <div id="cards-list">
        {/*<div className="row">{resumeArray.map(renderResume)}</div>*/}
        <Row>{resumeArray.map(renderResume)}</Row>
      </div>
    );
  }
};

export default LoadPmCard;
