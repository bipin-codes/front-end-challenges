import React from "react";
import "./Result.css";
import img from "../../assets/images/winner.svg";

const Result: React.FC<{ score: number; onClickHandler: () => void }> = ({
  score,
  onClickHandler,
}) => {
  return (
    <div className="result-container-body">
      <div className="result-body">
        <img alt="" src={img} />
        <h1>Results</h1>
        <h4>
          You got
          <span
            style={{ margin: "0 10px", color: "#6FCF97", fontSize: "40px" }}
          >
            {score}
          </span>
          correct answers
        </h4>

        <button className="try-again-btn" onClick={onClickHandler}>
          Try Again
        </button>
      </div>
    </div>
  );
};
export default Result;
