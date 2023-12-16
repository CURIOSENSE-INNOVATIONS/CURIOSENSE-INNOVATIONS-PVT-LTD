import React from "react";
import axios from "axios";

import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

import "./SignupPages.css";
import { Link } from "react-router-dom";
import { LOGIN } from "../Routes/Routes";

const SignupPage = () => {
  const initialFormData = {
    userName: "",
    password: "",
    email: "",
    phoneNumber: "",
    employeeId: "",
    creatorName: "",
    profession: "default",
    biography: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the selected value is the default one
    if (formData.profession === "default") {
      return toast.error("Please select a valid profession");
    } else {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/users/register`,
          formData
        );
        if (res.status === 201) {
          toast.success("Registration successful!!");
        setFormData(initialFormData);
        } else {
          toast.error(`Server error: ${res.message}`);
        }
      } catch (error) {
        if (error.response) {
  
          // Check if the user already exists
          if (error.response.status === 409) {
            toast.error("User already exists.");
          } else {
            toast.error(`Server error: ${error.response.data.message}`);
          }
        } else if (error.request) {
          // The request was made but no response was received
          toast.error("Network error. Please try again later.");
        } else {
          // Something happened in setting up the request that triggered an Error
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <h2>Creator's Account Registration</h2>

            <div className="input-group">
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="Username"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create Password"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Id"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleInputChange}
                placeholder="Employee Id / Govt. Id"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="creatorName"
                value={formData.creatorName}
                onChange={handleInputChange}
                placeholder="Physical Game - Creator Name"
                required
              />
            </div>

            <div className="input-group">
              <select
                id="Profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                required
              >
                <option disabled selected Value="default">
                  -- select an option --
                </option>
                <option value="Child Psychologist">Child Psychologist</option>
                <option value="Pediatric Therapist">Pediatric Therapist</option>
                <option value="Nursery Teacher">Nursery Teacher</option>
              </select>
            </div>

            <div className="input-group">
              <textarea
                id="Bio"
                name="biography"
                value={formData.biography}
                onChange={handleInputChange}
                required
                placeholder="Biography of the creator in 500 words."
              ></textarea>
            </div>

            <button type="submit" className="login-btn">
              Register
            </button>
            <Toaster />
            <div className="login-footer">
              Already have an account?{" "}
              <Link to={LOGIN} className="signupLink">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
