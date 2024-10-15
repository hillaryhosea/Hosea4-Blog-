import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <h1>Hosea4 Blog </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/creat"> New Blog </Link>
      </div>
    </div>
  );
}

export default NavBar;
