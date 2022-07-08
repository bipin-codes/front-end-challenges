import React from "react";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar_container">
      <div className="navbar_container_left">
        <a>
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar_container_right">
        <div className="search-parent">
          <input type="search" placeholder="Search" className="" />
          <input type="search" placeholder="Search" />
        </div>
        <button type="submit">Search</button>
      </div>
    </nav>
  );
};
export default Navbar;
