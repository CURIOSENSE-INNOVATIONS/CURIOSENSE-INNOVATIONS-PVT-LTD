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
    gender: "",
    category: "",
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
        .post('/api/v1/users/PhysicalGameReg', formData)

        .then((res) => {

          if (res.status === 201) {
            toast.success("Registration successful!!")
          } else {
            toast.error(`Server error: ${res.message}`);
          }

        })
  }

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
                placeholder="Game Title"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Suitable Age Group"
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
                  -- select an option --
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Category"
                required
              />
            </div>

            <div className="input-group">
              <textarea
                id="Howtoplay"
                name="howtoplay"
                value={formData.howtoplay}
                onChange={handleInputChange}
                required
                placeholder="How to Play the Game (in 100 words)."
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="benefitsofplaying"
                name="benefitsofplaying"
                value={formData.benefitsofplaying}
                onChange={handleInputChange}
                required
                placeholder="Benefits of Playing this Game for holistic development (in 50 words)"
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="itemsrequied"
                name="itemsrequied"
                value={formData.itemsrequied}
                onChange={handleInputChange}
                required
                placeholder="Items required to play this game."
              ></textarea>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                placeholder="Video URL"
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
                required
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

            <Toaster/>

            <button type="submit" className="login-btn">
              Submit
            </button>

            <div className="input-group">
              <span>Note : Please upload your video on google drive and make sure your video is on public mode</span>
            </div>
           
          </form>
        </div>
      </div>
    </>
  );
};

export default PhysicalGameReg;
