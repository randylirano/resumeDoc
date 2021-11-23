import { useRef, useState, useEffect } from "react";

const test_data = [
  {
    credential: {
      login_email: "mcraighall0@vimeo.com",
      password: "KJGapYMGcSIT",
    },
    first_name: "Mellicent",
    last_name: "Craighall",
  },
  {
    credential: {
      login_email: "randylirano@fakemail.com",
      password: "myFakePassword",
    },
    first_name: "Randy",
    last_name: "Lirano",
  },
];

export function SignUpForm() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [login_email, setLogiEmail] = useState("");
  const [login_password, setLoginPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // retrieve user's provided info
    let provided_info = {
      "first_name": first_name,
      "last_name": last_name,
      "login_email":login_email,
      "login_password": login_password
    };
    // console.log(login_credential);
    // if provided email and password already exist: sign-up failed
    // else, sign-up success
    let queryResult = 1;
    if (queryResult == 0) {
      console.log("SIGN UP SUCCESS", provided_info);
    } else {
      console.log("EMAIL AND PASSWORD ALREADY EXIST!! PLEASE USE DIFFERENT CREDENTIAL");
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inner">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>
            First Name:
            <input type="text" name="first_name" id="first_name" onChange={(e) => setFirstName(e.target.value)}/>
          </label>
        </div>
        <div className="form-group">
          <label>
            Last Name:
            <input type="text" name="last_name" id="last_name" onChange={(e) => setLastName(e.target.value)}/>
          </label>
        </div>
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
  );
}

export default SignUpForm;
