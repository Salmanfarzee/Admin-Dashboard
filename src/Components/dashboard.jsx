import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h2 className="heading"><span><i class="fa-brands fa-drupal"></i></span>Logo</h2>
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
        </ul>
      </div>

      <div className="content">
      <div class='topnav'>
      <div class="icon-bar">
        <i class="fa-solid fa-bell"></i>
        <i className="fa-solid fa-envelope"></i>
        
      </div>
        <Outlet />
      </div>
    </div>
    </div>
  );
};
 
export default Dashboard;
