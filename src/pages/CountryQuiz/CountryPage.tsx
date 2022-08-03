import React from "react";
import Quiz from "../../components/Quiz/Quiz";
import "./CountryPage.css";
const CountryPage = () => {
  return (
    <div className="root-page">
      <div className="container">
        <div className="quiz-container">
          <div className="quiz-container-header">
            <h1>COUNTRY QUIZ</h1>
          </div>
          <Quiz />
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
