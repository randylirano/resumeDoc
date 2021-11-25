// eslint-disable-next-line no-unused-vars
import { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { SignUpForm } from "./SignUp";
// eslint-disable-next-line no-unused-vars
import Landing from "./Landing";
// eslint-disable-next-line no-unused-vars
import "../stylesheets/landing.css"; 

const test_credential = {
  login_email: "randylirano@fakemail.com",
  login_password: "myFakePassword",
};


export function LoginForm() {
  const [login_email, setLogiEmail] = useState("");
  const [login_password, setLoginPassword] = useState("");
  
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let login_credential = {
      login_email: login_email,
      login_password: login_password,
    };
    // console.log(login_credential);
    // test credential check
    if (
      login_credential.login_email == test_credential.login_email &&
      login_credential.login_password == test_credential.login_password
    ) {
      // console.log("LOGGED IN", login_email);
      // let user_email = login_credential.login_email;
      // console.log("USER EMAIL", user_email);
      // let nav_params = {login_email: login_email};
      // console.log("NAVIGATION PARMAMTER", nav_params);
      navigate("/landing", {state:{login_email:login_email}});
    } else {
      console.log("INVALID CREDENTIAL");
    }
  }

  return (
    <main>
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
                  onChange={(e) => setLoginPassword(e.target.value)}
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
}

export default LoginForm;