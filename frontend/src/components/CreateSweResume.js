// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useRef, useState } from "react";
import "../stylesheets/swe-dashboard.css";
import { useNavigate } from "react-router-dom";

// Written by Kennedy Ezumah

const CreateResume = (props) => {
  /*
    CreateResume: component responsible for rendering the create resume form
                  Upon submit, form data is sent to the backend route that handles submissions
                  and screen is rerouted to swe dashboard
    params: takes the email of the authenticated user as a parameter and uses it to handle data 
            submission
   */

  const [userEmail] = useState(props.login_email);

  // template object to be populated by the form input
  let resumeObject = {
    resumeTitle: "",
    fullName: "",
    schoolAndMajor: "",
    schoolDates: "",
    projectName: "",
    projectDates: "",
    role: "",
    descriptionOne: "",
    descriptionTwo: "",
    descriptionThree: "",
    techSkillsList: "",
    interestsList: "",
  };

  // set the template object as a state variable
  const [resume, setResume] = useState(resumeObject);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(resume);

    // send form data to backend route
    // show user confirmation message

    const res = await fetch("api/swe/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });

    if (res.ok) {
      window.alert("Resume successfully generated! ✅");
      navigate("/swe", {
        state: { login_email: userEmail },
      });
    } else {
      alert("Submission unsucessful");
    }
  };

  return (
    <div className="container">
      <div className="row" id="title">
        <center>
          <h1>Let's Talk About Your Accomplishments</h1>
          <h4>
            Tell us a bit about yourself, and we'll build you a resume that's
            sure to wow employers.
          </h4>
          <h4 id="tag-line">It's that simple. </h4>
        </center>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="resumeTitle" className="form-label">
              Enter document title
            </label>
            <input
              type="text"
              placeholder="ex: 'Draft Resume'"
              className="form-control"
              required
              id="resumeTitle"
              aria-describedby="emailHelp"
              value={resume.resumeTitle}
              onChange={(e) =>
                setResume({ ...resume, resumeTitle: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Enter your full name
            </label>
            <input
              type="text"
              placeholder="ex: 'Kanu Oji'"
              className="form-control"
              required
              id="fullName"
              aria-describedby="emailHelp"
              value={resume.fullName}
              onChange={(e) =>
                setResume({ ...resume, fullName: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="schoolAndMajor" className="form-label">
              Where did you study?
            </label>
            <input
              type="text"
              placeholder="ex: 'Example Bootcamp, Software Engineering' "
              className="form-control"
              required
              id="schoolAndMajor"
              aria-describedby="emailHelp"
              value={resume.schoolAndMajor}
              onChange={(e) =>
                setResume({ ...resume, schoolAndMajor: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required. Please use the format [Institution, Program]
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="schoolDates" className="form-label">
              When did you study there?
            </label>
            <input
              type="text"
              placeholder="ex: 'Jan 2021 - Present' "
              className="form-control"
              required
              id="schoolDates"
              aria-describedby="emailHelp"
              value={resume.schoolDates}
              onChange={(e) =>
                setResume({ ...resume, schoolDates: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required. Please use the format [Month, Year - Month, Year]
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="projectName" className="form-label">
              Name a project that you have worked on
            </label>
            <input
              type="text"
              placeholder="ex: 'Automated CPU Temperature Monitoring System' "
              className="form-control"
              required
              id="projectName"
              aria-describedby="emailHelp"
              value={resume.projectName}
              onChange={(e) =>
                setResume({ ...resume, projectName: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="projectDates" className="form-label">
              When did you work on this project?
            </label>
            <input
              type="text"
              placeholder="ex: 'Jan 2021 - Present' "
              className="form-control"
              required
              id="projectDates"
              aria-describedby="emailHelp"
              value={resume.projectDates}
              onChange={(e) =>
                setResume({ ...resume, projectDates: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required. Please use the format [Month, Year - Month, Year]
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              What was your role?
            </label>
            <input
              type="text"
              placeholder="ex: 'Lead Engineer'"
              className="form-control"
              required
              id="role"
              aria-describedby="emailHelp"
              value={resume.role}
              onChange={(e) => setResume({ ...resume, role: e.target.value })}
            />
            <div id="entryHelp" className="form-text">
              Required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionOne" className="form-label">
              What did you implement in this project and in what language?
            </label>
            <input
              type="text"
              placeholder="ex: 'A cloud-based CPU temperature monitoring system in Python'"
              className="form-control"
              required
              id="descriptionOne"
              aria-describedby="emailHelp"
              value={resume.descriptionOne}
              onChange={(e) =>
                setResume({ ...resume, descriptionOne: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionTwo" className="form-label">
              What tools and technologies did you use for this project?
            </label>
            <input
              type="text"
              placeholder="ex: 'MongoDB, ReactJS, ExpressJS, NodeJS'"
              className="form-control"
              required
              id="descriptionTwo"
              aria-describedby="emailHelp"
              value={resume.descriptionTwo}
              onChange={(e) =>
                setResume({ ...resume, descriptionTwo: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionThree" className="form-label">
              How did you exhibit ownership?
            </label>
            <input
              type="text"
              placeholder="ex: 'through research and documentation of secure data storage technologies'"
              className="form-control"
              required
              id="descriptionThree"
              aria-describedby="emailHelp"
              value={resume.descriptionThree}
              onChange={(e) =>
                setResume({ ...resume, descriptionThree: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="techSkillsList" className="form-label">
              List any technical skills, tools, or programming languages you are
              proficient in
            </label>
            <input
              type="text"
              placeholder="ex: 'MongoDB, Python, NodeJS, ExpressJS, ReactJS, AWS '"
              className="form-control"
              required
              id="techSkillsList"
              aria-describedby="emailHelp"
              value={resume.techSkillsList}
              onChange={(e) =>
                setResume({ ...resume, techSkillsList: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="interestsList" className="form-label">
              List any interests you have
            </label>
            <input
              type="text"
              placeholder="ex: 'surfing, traveling, blogging, photography'"
              className="form-control"
              required
              id="interestsList"
              aria-describedby="emailHelp"
              value={resume.interestsList}
              onChange={(e) =>
                setResume({ ...resume, interestsList: e.target.value })
              }
            />
            <div id="entryHelp" className="form-text">
              Required.
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <footer>
          <center>© 2021 ResumeDoc</center>
        </footer>
      </div>
    </div>
  );
};

export default CreateResume;
