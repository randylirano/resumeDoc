import React from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Card, Row, Col, Container } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import Button from "react-bootstrap/Button";
import img from "../images/default-document.png";
import "../stylesheets/swe-dashboard.css";
// Written by Kennedy Ezumah

const LoadSweCard = (props) => {
  const [userEmail] = useState(props.login_email);
  console.log("USER IS:" + userEmail);
  const defaultMessage = "No Resumes Exist";
  let userObject = { login_email: userEmail };
  /*const resumeList = [
    { image: { img }, title: "Resume 1 Draft", text: "Twitter Internship App" },
    { image: { img }, title: "Resume 2 Draft", text: "Spotify Internship App" },
    { image: { img }, title: "Resume 3 Draft", text: "Zoom Internship App" },
    {
      image: { img },
      title: "Resume 4 Draft",
      text: "Microsoft Internship App",
    },
    { image: { img }, title: "Resume 5 Draft", text: "Yelp Internship App" },
    { image: { img }, title: "Resume 6 Draft", text: "Square Internship App" },
    {
      image: { img },
      title: "Resume 7 Draft",
      text: "Pinterest Internship App",
    },
    {
      image: { img },
      title: "Resume 8 Draft",
      text: "Doordash Internship App",
    },
    { image: { img }, title: "Resume 9 Draft", text: "Okra Internship App" },
  ];
  */
  const renderResume = (card, index) => {
    return (
      <Card style={{ width: "10rem" }} key={index} id="individual-card">
        <Card.Img variant="top" src={img} height="100" width="75" />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>Blank</Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    );
  };

  async function fetchResumes(userObject) {
    let empty = [];
    const res = await fetch("api/swe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObject),
    });
    if (res.ok) {
      return res;
    } else {
      return empty;
    }
  }

  // get resume array from the database
  let resumeArray = fetchResumes(userObject);

  console.log(resumeArray);
  // return the default message if database returns an empty array
  if (resumeArray.length == 0) {
    return <div id="default-text">{defaultMessage}</div>;
  }
  // otherwise map the array of resume objects to render them as an array
  else {
    return (
      <div id="cards-list">
        <Row>{resumeArray.map(renderResume)}</Row>
      </div>
    );
  }
};

export default LoadSweCard;
