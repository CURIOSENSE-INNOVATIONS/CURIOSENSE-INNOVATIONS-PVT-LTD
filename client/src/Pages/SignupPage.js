import React from "react";
import "./SignupPages.css";
import { Link } from "react-router-dom";
import { LOGIN } from "../Routes/Routes";


const SignupPage = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <form action="#">
            <h2>Creator's Account Registration</h2>

            <div className="input-group">
              <input type="text" placeholder="Name" disabled/>
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email Id" disabled/>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" disabled/>
            </div>
            <div className="input-group">
              <input type="number" placeholder="Phone Number" disabled/>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Physical Game Creator Name" disabled/>
            </div>
            <div className="input-group">
              <select id="Profession" name="Profession" disabled>
                <option value="ChildPsychologist">Child Psychologist</option>
                <option value="PediatricTherapist">Pediatric Therapist</option>
                <option value="NurseryTeacher">Nursery Teacher</option>
              </select>
            </div>
            <div className="input-group">
              <textarea
                name="Biology"
                id="Bio"
                placeholder="Biology of the creator in 500 words."
                disabled
              ></textarea>
            </div>

            <button type="submit" className="login-btn" disabled>Register</button>
            <div className="login-footer">
            Already have an account? <Link to={LOGIN} className="signupLink">Login</Link>
      </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
