import React from "react";
import "./Dashboard.css";

import DashboardImage from '../Images/Assets/assets5.jpeg'
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="dashboard-main">
      {/* <div className="">User Dashboard</div> */}
      <div className="dashboard-header">
        <span>Welcome Back</span>
        <h2>Mr. Rakesh Kumar</h2>
      </div>
      <div className="dashboard-submain">
        <div className="dashboard-left">
            {/* <p>Create New Game</p>
            <p>Edit the game created</p>
            <p>Delete the game created</p>
            <p>View created games and responses</p> */}
            <Link to='/physicalgamereg'>
            <button className="buy-button btn-dashboard">Create a New Game</button>
          </Link>
            
        </div>
        <div className="dashborard-right">
            <img className="animation" src={DashboardImage} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
