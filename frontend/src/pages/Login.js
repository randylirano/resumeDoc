import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import "../stylesheets/landing.css";

// Author: Randy Lirano

const Login = () => {
  const [login_email, setLogiEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let login_credential = {
      login_email: login_email,
      password: password,
    };

    // console.log("AT FRONTEND SENDING:", login_credential);

    const res = await fetch("api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login_credential),
    });

    // console.log("AT FRONTEND GOT:", res);

    if (res.ok) {
      navigate("/landing", { state: { login_email: login_email } });
    } else {
      alert("Incorrect email and password combination. Please retry.");
    }
  };

  return (
    <main>
      <center id="banner">
        <h1>ResumeDoc</h1>
        <h4 id="tag-line">Build a Compelling Professional Resume in Minutes</h4>
      </center>

      <center id="login_form">
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <h2>Login</h2>
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
                  name="login_password"
                  id="login_password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <input type="submit" value="Login" />
          </div>
        </form>
        <Link to="/signup">Sign Up</Link>
      </center>
    </main>
  );
};

export default Login;
