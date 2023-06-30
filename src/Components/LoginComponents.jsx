import React, { useState } from "react";
import { LoginAPI } from "../api/AuthApi";
import "../Sass/LoginComponent.scss";
import { useNavigate } from "react-router-dom";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import { toast } from "react-toastify";

export default function LoginComponents() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed In to LinkedIn");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (e) {
      console.log(e);
      toast.error("Invalid credentials");
    }
  };
  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} width={2} alt="LinkedIn Logo" className="linkedinLogo" />
      <div className="login-wrapper-inner ">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>
        <div className="auth-inputs">
          <input
            onChange={(event) => {
              setCredentials({ ...credentials, email: event.target.value });
            }}
            className="common-input"
            placeholder="Email"
            type="email"
          />
          <input
            onChange={(event) => {
              setCredentials({ ...credentials, password: event.target.value });
            }}
            className="common-input"
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="login-btn" onClick={login}>
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      {/* Todo */}
      <div className="google-btn-container">
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}
