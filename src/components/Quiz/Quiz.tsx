import React from "react";
import img from "../../assets/images/init.svg";
import "./Quiz.css";
const Quiz = () => {
  return (
    <div className="quiz-container-body">
      <img alt="" src={img} className="header-image" />
      <div className="quiz-body">
        <h3>Kuala Lumpur is the Capital of</h3>
        <ol>
          <li className="li-item">Vietnam</li>
          <li className="li-item">Sweden</li>
          <li className="li-item">Austria</li>
          <li className="li-item">Malasia</li>
        </ol>
      </div>
    </div>
  );
};
export default Quiz;
