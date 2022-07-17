import React, { FC } from "react";
import logo from "../../../assets/images/logo.png";

import "./Navbar.css";
const Navbar: FC<{
  clickHandler: () => void;
  guests: number;
  city: string;
}> = ({ clickHandler, city, guests }) => {
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
            value={city}
          />
          <div className="vl"></div>
          <input
            readOnly
            type="search"
            placeholder="Add guests"
            className="search-box search-box-bordered"
            value={guests === 0 ? "Add guests" : guests}
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
