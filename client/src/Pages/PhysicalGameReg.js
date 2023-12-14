import React from "react";
import { useState } from "react";

const PhysicalGameReg = () => {
  const initialFormData = {
    gameTitle: "",
    age: "",
    email: "",
    gender: "",
    category: "",
    howToPlay: "",
    benefitsOfPlaying: "",
    itemsRequied: "",
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
  }

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <h2>Create a New Physical Game</h2>

            <div className="input-group">
              <input
                type="text"
                name="gameTitle"
                value={formData.gameTitle}
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
                id="HowToPlay"
                name="howToPlay"
                value={formData.howToPlay}
                onChange={handleInputChange}
                required
                placeholder="How to Play the Game (in 100 words)."
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="BenefitsOfPlaying"
                name="benefitsOfPlaying"
                value={formData.benefitsOfPlaying}
                onChange={handleInputChange}
                required
                placeholder="Benefits of Playing this Game for holistic development (in 50 words)"
              ></textarea>
            </div>

            <div className="input-group">
              <textarea
                id="ItemsRequired"
                name="itemsRequied"
                value={formData.itemsRequied}
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

            <button type="submit" className="login-btn" disabled={true}>
              Submit
            </button>
           
          </form>
        </div>
      </div>
    </>
  );
};

export default PhysicalGameReg;
