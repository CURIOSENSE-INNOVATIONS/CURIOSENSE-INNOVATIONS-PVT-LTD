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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await axios.post("/api/v1/users/login", formData)

    .then((res)=>{

      if(res.status === 200) {
        console.log(res.data)
        toast.success(res.data.message)

        setAuth({
          ...auth,
          user: res.data.data.user,

        })

        localStorage.setItem("auth",JSON.stringify(res.data.data.user))

        navigate(DASHBOARD)
      }
    })

    .catch((error)=>{
      toast.error(error.data.message)
    })
  };

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
