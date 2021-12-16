import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Card, Row, Col, Container } from "react-bootstrap";
import "../stylesheets/swe-dashboard.css";

// Author: Randy Lirano

function Education({education}) {
  return (
    <div className="row">
      <div className="col">{education.degree} in {education.major}</div>
      <div className="col">{education.school_name}</div>
      <div className="col">{education.start_date} - {education.end_date}</div>
    </div>
  );
}

function WorkExperience ({work_experience}) {
  return (
    <div>
      <div className="row">
        <div className="col">{work_experience.position}</div>
        <div className="col">{work_experience.company_name}</div>
        <div className="col">{work_experience.start_date} - {work_experience.end_date}</div>
      </div>
      <div className="row">
        <ul>
          <li>{work_experience.question_1}</li>
          <li>{work_experience.question_2}</li>
          <li>{work_experience.question_3}</li>
          <li>{work_experience.question_4}</li>
        </ul>
      </div>
    </div>
  );
}

function Project ({project}) {
  return (
    <div>
      <div className="row">
        <div className="col">{project.name}</div>
        <div className="col">{project.start_date} - {project.end_date}</div>
      </div>
      <div className="row">
        <ul>
          <li>{project.question_1}</li>
          <li>{project.question_2}</li>
          <li>{project.question_3}</li>
        </ul>
      </div>
    </div>
  );
}

export function ResumeDetail({resume}) {
  const [resumeObj] = useState(resume);

  // console.log(resumeObj["education"]);

  function renderEducation() {
    return resumeObj.education.map((e, i) => (
      <Education key={`education_${i}`} education={e} />
    ));
  }

  function renderWorkExperience() {
    return resumeObj.work_experience.map((w_e, i) => (
      <WorkExperience key={`work_exp_${i}`} work_experience={w_e} />
    ));
  }

  function renderProject() {
    return resumeObj.project.map((p, i) => (
      <Project key={`project_${i}`} project={p} />
    ));
  }

  function renderSkills() {
    return resumeObj.skills.map((s,i) => (
      <li key={`skill_${i}`}>{s}</li>
    ));
  }

  return (
    <div>
      <h2>Education</h2>
      {renderEducation()}
      <br/>
      <h2>Work</h2>
      {renderWorkExperience()}
      <br/>
      <h2>Project</h2>
      {renderProject()}
      <br/>
      <h2>Skills</h2>
      {renderSkills()}

    </div>
  );
}

export default ResumeDetail;
