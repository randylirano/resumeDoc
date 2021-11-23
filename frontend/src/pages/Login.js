import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import {SignUpForm} from "./SignUp";
import Landing from "./Landing";

const test_credential = {
  "login_email":"randylirano@fakemail.com",
  "login_password": "myFakePassword"
};

export function LoginForm() {
  const [login_email, setLogiEmail] = useState("");
  const [login_password, setLoginPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let login_credential = {
      "login_email":login_email,
      "login_password": login_password
    };
    // console.log(login_credential);
    // test credential check
    if (login_credential.login_email == test_credential.login_email && login_credential.login_password == test_credential.login_password) {
      console.log("LOGGED IN", login_credential);
      navigate("/landing");
    } else {
      console.log("INVALID CREDENTIAL");
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
          <h2>Login</h2>
          <div className="form-group">
            <label>
              Email:
              <input type="text" name="login_email" id="login_email" onChange={(e) => setLogiEmail(e.target.value)}/>
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input type="password" name="login_password" id="login_password" onChange={(e) => setLoginPassword(e.target.value)}/>
            </label>
          </div>
          <input type="submit" value="Login"/>
        </div>
      </form>
      <nav>
         <Link to="/signup">Sign-Up</Link>
       </nav>
    </main>
    
  );
}

export default LoginForm;
