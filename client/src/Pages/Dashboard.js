import React from "react";
import "./Dashboard.css";

import DashboardImage from "../Images/Assets/assets5.jpeg";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/auth";


const Dashboard = () => {

  const [auth, setAuth] = useAuth();
  // const creatorName = auth.user.creatorName || 'Default Creator';

  return (
    <section className="dashboard-main">
      {/* <div className="">User Dashboard</div> */}
      <div className="dashboard-header">
        <span>Welcome Back</span>
        {/* <h2>{auth.user.creatorName}</h2>
        <span> {auth.user.email} </span> */}
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
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
    </section>
  );
};

export default Dashboard;
