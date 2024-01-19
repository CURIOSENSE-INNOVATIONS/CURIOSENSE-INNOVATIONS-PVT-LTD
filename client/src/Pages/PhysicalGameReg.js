import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DashboardHeader from "../Components/DashboardHeader";

const PhysicalGameReg = () => {
  const initialFormData = {
    gametitle: "",
    age: "",
    gender: "default",
    category: "default",
    subcategory: "default",
    howtoplay: "",
    benefitsofplaying: "",
    itemsrequied: "",
    url: "",
    score: "",
    level: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${process.env.REACT_APP_API}/api/v1/users/physicalgamereg`,
        formData
      )

      .then((res) => {
        console.log(res);

        if (res.status === 201) {
          
          toast.success("Your Idea Save in our database");
        } else {
          toast.error(`Server error: ${res.message}`);
        }
      })

      .catch((error) => {
        if (error.response) {
          
          if (error.response.status === 409) {
            toast.error("User already exists.");
          } else {
            toast.error(`Server error: ${error.response.data.message}`);
          }
        } else if (error.request) {
         
          toast.error("Network error. Please try again later.");
        } else {
      
          toast.error("An unexpected error occurred. Please try again.");
        }
      });
  };

  return (
    <>
      <DashboardHeader />
      <div className="login-container signup-container">
        <div className="login-box signup-box">
          <form onSubmit={handleSubmit}>
            <h2>Create a New Physical Game</h2>

            <div className="input-group">
              <input
                type="text"
                name="gametitle"
                value={formData.gametitle}
                onChange={handleInputChange}
                placeholder="Game Title*"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Suitable Age Group*"
                required
              />
            </div>

            <div className="input-group">
              <select
                id="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option disabled selected Value="default">
                  -- Suitable for Gender* --
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="input-group">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option disabled selected Value="default">
                  -- Category* --
                </option>
                <option value="Academic Lessons">Academic Lessons</option>
                <option value="Behavior Development">
                  Behavior Development
                </option>
                <option value="Cognition Development">
                  Cognition Development
                </option>
                <option value="Motor Skill Development">
                  Motor Skill Development
                </option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="input-group">
              <select
                id="subcategory"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleInputChange}
                required
              >
                <option disabled selected Value="default">
                  -- Sub Category* --
                </option>
                <option value="Memory Enhancement">Memory Enhancement</option>
                <option value="Fine Motor Skill">Fine Motor Skill</option>
                <option value="Academic Lessons Title">
                  Academic Lessons Title
                </option>
              </select>
            </div>

            <div className="input-group">
              <textarea
                id="Howtoplay"
                name="howtoplay"
                value={formData.howtoplay}
                onChange={handleInputChange}
                required
                placeholder="How to Play the Game (in 100 words).*"
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="benefitsofplaying"
                name="benefitsofplaying"
                value={formData.benefitsofplaying}
                onChange={handleInputChange}
                required
                placeholder="Benefits of Playing this Game for holistic development (in 50 words)*"
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="itemsrequied"
                name="itemsrequied"
                value={formData.itemsrequied}
                onChange={handleInputChange}
                required
                placeholder="Items required to play this game.*"
              ></textarea>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                placeholder="Video URL*"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="score"
                value={formData.score}
                onChange={handleInputChange}
                placeholder="Provide Scoring Pattern"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                placeholder="Provide Number of levels"
              />
            </div>

            <Toaster />

            <button type="submit" className="login-btn">
              Submit
            </button>

            <div className="input-group">
              <span>
                Note : Please upload your video on google drive and make sure
                your video is on public mode
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PhysicalGameReg;
