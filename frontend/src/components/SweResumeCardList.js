import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import img from "../images/default-document.png";
import "../stylesheets/swe-dashboard.css";

// Author: Kennedy Ezumah

function ResumeCard({ resume }) {
  const navigate = useNavigate();

  
  return (
    <Card style={{ width: "10rem" }} id="individual-card">
      <Card.Img variant="top" src={img} height="100" width="75" />
      <Card.Body>
        <Card.Title>{resume.title}</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary" onClick={() => navigate("/resume-detail", {state: {"resume": resume}})}>
          View
        </Button>
      </Card.Body>
    </Card>
  );
}

export function SweResumeCardList(props) {
  const [userEmail] = useState(props.login_email);
  const [resumes, setResumes] = useState([]);

  let activeEmail = { login_email: userEmail };

  const reloadResumes = async (activeEmail) => {
    const res = await fetch("api/swe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activeEmail),
    });

    if (res.ok) {
      let resumesResult = await res.json();

      // console.log("GOT RESUMES", resumesResult);

      setResumes(resumesResult);
    }
  };

  // installing the effect
  useEffect(
    () => {
      reloadResumes(activeEmail);
    }, // use the effect
    [] // parameters that trigger the effect
  );

  function renderResumeCards() {
    return resumes.map((p, i) => (
      <ResumeCard key={`resume_${i}`} resume={p} ></ResumeCard>
    ));
  }

  return (
    <div className="row">
      {renderResumeCards()}
    </div>
  );
}

export default SweResumeCardList;
