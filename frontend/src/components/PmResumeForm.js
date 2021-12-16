// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "../stylesheets/pm-dashboard.css";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";

export function PmResumeForm(props) {
  // eslint-disable-next-line no-unused-vars
  const [userEmail] = useState(props.login_email);
  const [userResponse, setResponse] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setResponse((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // parsed user response into resume obj
    let resumeObj = {
      user: { userEmail },
      title: userResponse.title,
      education: {
        school_name: userResponse.school_name,
        degree: userResponse.degree,
        major: userResponse.major,
        start_date: userResponse.education_start_date,
        end_date: userResponse.education_end_date
      },
      work_experience: {
        company_name: userResponse.company_name,
        position: userResponse.company_position,
        start_date: userResponse.company_start_date,
        end_date: userResponse.company_end_date,
        location: userResponse.company_location,
        question_1: userResponse.work_question_1,
        question_2: userResponse.work_question_2,
        question_3: userResponse.work_question_3,
        question_4: userResponse.work_question_4,
      },
      project: {
        name: userResponse.project_name,
        start_date: userResponse.project_start_date,
        end_date: userResponse.project_end_date,
        question_1: userResponse.project_question_1,
        question_2: userResponse.project_question_2,
        question_3: userResponse.project_question_3,
      },
      skills: getParsedSkills()
    };

    console.log(userResponse);
    console.log(resumeObj);

    const res = await fetch("api/pm/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resumeObj),
    });

    if (res.ok) {
      window.alert("Resume successfully generated! ✅");
      navigate("/pm", {
        state: { login_email: userEmail },
      });
    } else {
      console.log(res.status);
    }

    // parsedSkills();
    // console.log(resumeObj);
    
  };

  const getParsedSkills = () => {
    // take the comma separated skills
    let userSkills = userResponse.skills.split(",");
    // parsed by "," and trim leading whitespace
    let parsedSkills = [];

    for (let skill of userSkills) {
      parsedSkills.push(skill.trim());
    }

    // console.log("PARSED", parsedSkills);
    return parsedSkills;
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
          <h2>Title</h2>
          <div className="form-group">
            <label>
              Title:
              <input
                type="text"
                className="form-control"
                name="title"
                value={userResponse.title || ""}
                required
                placeholder="Provide a title for your resume"
                onChange={handleChange}
              />
            </label>
          </div>

          <h2>Education</h2>
          <div className="form-group">
            <label>
              School Name:
              <input
                type="text"
                className="form-control"
                name="school_name"
                value={userResponse.school_name || ""}
                required
                placeholder="Put N/A if no formal institution"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Degree:
              <input
                type="text"
                className="form-control"
                name="degree"
                value={userResponse.degree || ""}
                required
                placeholder="Put N/A if no formal institution"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Major:
              <input
                type="text"
                className="form-control"
                name="major"
                value={userResponse.major || ""}
                required
                placeholder="Put N/A if no formal institution"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Start Date:
              <input
                type="text"
                className="form-control"
                name="education_start_date"
                value={userResponse.education_start_date || ""}
                required
                placeholder="mm/dd/yyyy"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              End Date:
              <input
                type="text"
                className="form-control"
                name="education_end_date"
                value={userResponse.education_end_date || ""}
                required
                placeholder="mm/dd/yyyy or Present"
                onChange={handleChange}
              />
            </label>
          </div>

          <h2>Work Experience</h2>
          <div className="form-group">
            <label>
              Company Name:
              <input
                type="text"
                className="form-control"
                name="company_name"
                value={userResponse.company_name || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Position:
              <input
                type="text"
                className="form-control"
                name="company_position"
                value={userResponse.company_position || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Location:
              <input
                type="text"
                className="form-control"
                name="company_location"
                value={userResponse.company_location || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Start Date:
              <input
                type="text"
                className="form-control"
                name="company_start_date"
                value={userResponse.company_start_date || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              End Date:
              <input
                type="text"
                className="form-control"
                name="company_end_date"
                value={userResponse.company_end_date || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Tell us an issue that you solve and the impact for the company:
              <input
                type="text"
                className="form-control"
                name="work_question_1"
                value={userResponse.work_question_1 || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Tell us a project where you have made a major contribution:
              <input
                type="text"
                className="form-control"
                name="work_question_2"
                value={userResponse.work_question_2 || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Tell us the time where you use a specific technology to solve a certain task:
              <input
                type="text"
                className="form-control"
                name="work_question_3"
                value={userResponse.work_question_3 || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Share the time where you take a leadership role in a project:
              <input
                type="text"
                className="form-control"
                name="work_question_4"
                value={userResponse.work_question_4 || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <h2>Project</h2>
          <div className="form-group">
            <label>
              Project Name:
              <input
                type="text"
                className="form-control"
                name="project_name"
                value={userResponse.project_name || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Start Date:
              <input
                type="text"
                className="form-control"
                name="project_start_date"
                value={userResponse.project_start_date || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              End Date:
              <input
                type="text"
                className="form-control"
                name="project_end_date"
                value={userResponse.project_end_date || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              What specific technology or skill that you used to tackle a major milestone in this project?
              <input
                type="text"
                className="form-control"
                name="project_question_1"
                value={userResponse.project_question_1 || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              What are you struggling the most in this project and how did you overcome it?
              <input
                type="text"
                className="form-control"
                name="project_question_2"
                value={userResponse.project_question_2 || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              What are you most proud of in this project?
              <input
                type="text"
                className="form-control"
                name="project_question_3"
                value={userResponse.project_question_3 || ""}
                required
                placeholder="Put N/A for first job"
                onChange={handleChange}
              />
            </label>
          </div>

          <h2>Skills</h2>
          <div className="form-group">
            <label>
              Skills:
              <textarea
                type="text"
                className="form-control"
                name="skills"
                id="skills"
                value={userResponse.skills}
                required
                placeholder="Separate your skills using a comma (,)"
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PmResumeForm;
