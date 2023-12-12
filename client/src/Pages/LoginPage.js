// LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SIGNUP } from "../Routes/Routes";
import "./LoginPage.css";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Perform login logic here
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/users/login`, { email, password });
      if (res && res.data) {
        const token = res.data.token;
        alert('Login succecss : ', token)
        
      } else {
        console.error('Invalid res format:', res);
      }
    } catch (error) {
      if (error.res && error.res.data) {
        console.error('Login failed:', error.res.data);
      } else {
        console.error('Login failed. No res data:', error);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login To CurioFit</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <div className="login-footer">
            Don't have an account?{" "}
            <Link to={SIGNUP} className="signupLink">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
