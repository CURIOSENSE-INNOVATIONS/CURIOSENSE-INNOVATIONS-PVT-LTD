import React from "react";
import "./Dashboard.css";

import DashboardImage from "../Images/Assets/assets5.jpeg";
import { Link } from "react-router-dom";
import DashboardHeader from "../Components/DashboardHeader";
import NewGameInputDash from "../Components/NewGameInputDash";


const Dashboard = () => {

  return (
    <section className="dashboard-main">
      <DashboardHeader />
      <div className="dashboard-submain">
        <div className="dashboard-left">
          <Link to="/physicalgamereg">
            <button className="buy-button btn-dashboard">
              Create a New Game
            </button>
          </Link>
        </div>
        <div className="dashborard-right">
          <img className="animation" src={DashboardImage} alt="Pic" />
        </div>
      </div>
      <NewGameInputDash />
    </section>
  );
};

export default Dashboard;
