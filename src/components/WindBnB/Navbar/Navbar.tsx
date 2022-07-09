import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [guests, setGuests] = useState(undefined);
  const [location, setLocation] = useState("Helsinki, Finland");

  return (
    <nav className="navbar_container">
      <div className="navbar_container_left">
        <a>
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar_container_right">
        <div className="search-parent">
          <input
            readOnly
            type="search"
            placeholder="Search"
            className="search-box"
            value={location}
          />
          <div className="vl"></div>
          <input
            readOnly
            type="search"
            placeholder="Add guests"
            className="search-box search-box-bordered"
            value={guests}
          />
          <div className="vl"></div>

          <span className="material-icons icon"> {"search"}</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
