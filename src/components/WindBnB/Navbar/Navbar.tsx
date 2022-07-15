import React, { useState, FC } from "react";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";
const Navbar: FC<{ clickHandler: () => void }> = ({ clickHandler }) => {
  const [guests] = useState(undefined);
  const [location] = useState("Helsinki, Finland");

  return (
    <nav className="navbar_container">
      <div className="navbar_container_left">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
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

          <span className="material-icons icon" onClick={clickHandler}>
            {" "}
            {"search"}
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
