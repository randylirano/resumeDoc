// eslint-disable-next-line no-unused-vars
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/landing.css";

// Author: Randy Lirano

const SignUp = () => {
  // eslint-disable-next-line no-unused-vars
  const [first_name, setFirstName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [last_name, setLastName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [login_email, setLogiEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();

  let signUpFormRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // transfer form data into data object
    const formData = new FormData(signUpFormRef.current);

    let data = {};
    for (let [key, val] of formData.entries()) {
      data[key] = val;
    }

    console.log("AT FRONT END, PROVIDED DATA", data);

    const res = await fetch("api/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      navigate("/");
    } else {
      alert("Sign-up failed.");
    }
  };

  return (
    <main>
      <center id="banner">
        <h1>ResumeDoc</h1>
        <h4 id="tag-line">Build a Compelling Professional Resume in Minutes</h4>
        <form onSubmit={handleSubmit} ref={signUpFormRef}>
          <div className="form-inner">
            <h1>Sign Up</h1>
            <div className="form-group">
              <label>
                First Name:
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Last Name:
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Email:
                <input
                  type="text"
                  name="login_email"
                  id="login_email"
                  onChange={(e) => setLogiEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <input type="submit" value="SignUp" />
          </div>
        </form>
      </center>
    </main>
  );
};

export default SignUp;
