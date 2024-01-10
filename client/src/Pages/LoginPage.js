// LoginPage.js
import React, { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { DASHBOARD, SIGNUP } from "../Routes/Routes";

import "./LoginPage.css";

import { useAuth } from "../Context/auth";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const initialFormData = {
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/users/login`,
        formData
      );

     if (response.status === 200) {
        const userData = response.data.data.user;

        setAuth({
          ...auth,
          user: userData,
        });

        localStorage.setItem("auth", JSON.stringify(userData));

        await navigate(DASHBOARD);
        toast.success("User LoggedIn Successfully")
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      if (error.response) {
        const { status } = error.response;

        if (status === 400) {
          toast.error("Username or password is required");
        } else if (status === 404) {
          toast.error("User does not exist");
        } else if (status === 401) {
          toast.error("Invalid user credentials");
        } else {
          toast.error("Bad request");
        }
      } else {
        console.error("Network error:", error);
        toast.error("Network error");
      } 
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login To CurioFit</h2>
        {loading && <div>Loading...</div>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              // required
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
              // required
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
