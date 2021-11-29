import React from "react";
import { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import img from "../images/default-doc.png";
// Written by Kennedy Ezumah

const LoadSweCard = (props) => {
  const [resume] = useState(props);
  return (
    <Container>
      <Row>
        {resume.map((resume, k) => (
          <Col key={k} xs={12} md={4} lg={3}>
            <Card>
              <Card.Img
                src={img}
                width="40"
                height="40"
                alt="a document icon with a pencil beside it"
              />

              <Card.Body>
                <Card.Title>Resume {resume.swe_resume_id}</Card.Title>
                <Card.Text>Resume</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LoadSweCard;
