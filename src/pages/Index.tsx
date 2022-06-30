import React from "react";
import { Link, Location, Outlet, useLocation } from "react-router-dom";

export const Index: React.FC = () => {
  const usePathName = (): Location => {
    const location = useLocation();
    return location;
  };

  return (
    <>
      <nav>
        <h3 style={{ margin: "20px" }}>Welcome to Front End Challenges</h3>
        <ul>
          <li>
            <Link to="/button" style={{ textDecoration: "none" }}>
              Button Component Challenge
              {usePathName().pathname === "/button" ? "[Current]" : ""}
            </Link>
          </li>
          <li>
            <Link to="/input" style={{ textDecoration: "none" }}>
              Input Component Challenge
              {usePathName().pathname === "/input" ? "[Current]" : ""}
            </Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
