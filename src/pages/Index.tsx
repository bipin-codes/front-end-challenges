import React from "react";
import { Link } from "react-router-dom";

export const Index: React.FC = () => {
  return (
    <>
      <div className="container">
        <h3 style={{ margin: "20px" }}>Welcome to Front End Challenges</h3>
        <ul>
          <li>
            <Link to="/button" style={{ textDecoration: "none" }}>
              Button Component Challenge
            </Link>
          </li>
          <li>
            <Link to="/input" style={{ textDecoration: "none" }}>
              Input Component Challenge
            </Link>
          </li>

          <li>
            <Link to="/windbnb" style={{ textDecoration: "none" }}>
              Windbnb Challenge
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
