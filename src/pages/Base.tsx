import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Index: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/button">Buttons</Link>
          </li>
          <li>
            <Link to="/input">InputFields</Link>
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
