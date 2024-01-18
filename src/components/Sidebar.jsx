import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/about">About</NavLink> */}
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/skills"> Skills</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
