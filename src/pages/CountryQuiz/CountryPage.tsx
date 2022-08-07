import React, { useState } from "react";
import Quiz from "../../components/Quiz/Quiz";
import Result from "../../components/Quiz/Result";
import "./CountryPage.css";

export interface QuizData {
  image: string;
  question: string;
  options: Array<string>;
  correntAnswer: string;
}

const CountryPage = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quiz] = useState<Array<QuizData>>([
    {
      image: "https://flagcdn.com/80x60/fi.png",
      question: "Which country does this flag belong to?",
      options: ["Vietnam", "Finland", "Sweden", "Austria"],
      correntAnswer: "Finland",
    },
    {
      image: "",
      question: "New Delhi is capitla of",
      options: ["Sweden", "Indonesia", "Pakistan", "India"],
      correntAnswer: "India",
    },
    {
      image: "https://flagcdn.com/80x60/us.png",
      question: "Which country does this flag belong to?",
      options: ["USA", "China", "Japan", "India"],
      correntAnswer: "USA",
    },
    {
      image: "",
      question: "Kuala Lumpur is capitla of",
      options: ["Malaysia", "China", "Africa", "India"],
      correntAnswer: "Malaysia",
    },
  ]);

  return (
    <div className="root-page">
      <div style={{ position: "fixed", width: "100vw" }}>
        <h6
          style={{
            textAlign: "center",
            color: "#880000",
            background: "#ff0000",
            padding: "5px",
          }}
        >
          This project is not using the required API as it wasn't working!
        </h6>
      </div>
      <div className="container">
        <div className="quiz-container">
          <div className="quiz-container-header">
            <h1>COUNTRY QUIZ</h1>
          </div>

          {index < quiz.length ? (
            <Quiz
              ques={quiz[index]}
              onClickHandler={(answer: string) => {
                setScore(
                  answer === quiz[index].correntAnswer ? score + 1 : score
                );
              }}
              onNextHandler={() => {
                setIndex(index + 1);
              }}
            />
          ) : (
            <Result
              score={score}
              onClickHandler={() => {
                setIndex(0);
                setScore(0);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
