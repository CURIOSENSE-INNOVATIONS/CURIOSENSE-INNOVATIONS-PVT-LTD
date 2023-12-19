// LoginPage.js
import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { SIGNUP } from "../Routes/Routes";

import "./LoginPage.css";

import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {

  const initialFormData = {
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/users/login",formData)
      // console.log('Login Successful', res.data);
      toast.success("User LoggedIn Successfully", res.data)

    } catch (error) {
      console.error('Login Error', error);
    }

  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login To CurioFit</h2>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <Toaster />
          <button type="submit" className="login-btn">
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
