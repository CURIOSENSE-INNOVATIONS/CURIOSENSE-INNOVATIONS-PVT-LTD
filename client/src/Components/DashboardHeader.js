import React, { useEffect } from "react";
import { useAuth } from "../Context/auth";

const DashboardHeader = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div className="dashboard-header">
      <span>Welcome Back</span>
      <h2>{auth?.user?.creatorName}</h2>
      <span> {auth?.user?.profession} </span>
    </div>
  );
};

export default DashboardHeader;
