import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex-container">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="vendors">Vendors</Link>
          </li>
          <li>
            <Link to="profiles">Profiles</Link>
          </li>
          <li>
            <Link to="meetings">Meetings</Link>
          </li>
          <li>
            <Link to="templates">Templates</Link>
          </li>
          <li>
            <Link to="jobdescription">Job Description</Link>
          </li>
          <li>
            <Link to="users">Users</Link>
          </li>
          <li>
            <Link to="listvendors">List Of Vendors</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
