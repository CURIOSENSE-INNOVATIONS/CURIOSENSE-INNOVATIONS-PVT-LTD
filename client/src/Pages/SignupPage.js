import React from "react";
import "./SignupPages.css";
import { Link } from "react-router-dom";
import { LOGIN } from "../Routes/Routes";

const SignupPage = () => {

  const handleSignup = () => {
    // Perform login logic here
    alert("Sorry, this feature is not available right now! CI pvt ltd.")
    // console.log(`Login with username: ${username} and password: ${password}`);
  };
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <form action="#">
            <h2>Creator's Account Registration</h2>

            <div className="input-group">
              <input type="text" placeholder="Name" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email Id"  />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password"  />
            </div>
            <div className="input-group">
              <input type="number" placeholder="Phone Number"  />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Employee / Govt ID"  />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Physical Game Creator Name"
                
              />
            </div>
            <div className="input-group">
              <select id="Profession" name="Profession" >
              <option disabled selected value> -- select an option -- </option>
                <option value="ChildPsychologist">Child Psychologist</option>
                <option value="PediatricTherapist">Pediatric Therapist</option>
                <option value="NurseryTeacher">Nursery Teacher</option>
              </select>
            </div>
            <div className="input-group">
              <textarea
                name="Biography"
                id="Bio"
                placeholder="Biography of the creator in 500 words."
                
              ></textarea>
            </div>

            <button type="submit" className="login-btn" >
              Register
            </button>
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
