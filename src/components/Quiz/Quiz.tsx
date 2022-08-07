import React, { FC, useState } from "react";
import img from "../../assets/images/init.svg";
import { QuizData } from "../../pages/CountryQuiz/CountryPage";
import "./Quiz.css";
const Quiz: FC<{
  ques: QuizData;
  onClickHandler: (answer: string) => void;
  onNextHandler: () => void;
}> = ({ ques, onClickHandler, onNextHandler }) => {
  const { image, question, options, correntAnswer } = ques;
  const [answered, setAnswered] = useState({ index: -1, value: "" });
  return (
    <div className="quiz-container-body">
      <img alt="" src={img} className="header-image" />
      <div className="quiz-body">
        {image && <img alt="" src={image} style={{ width: 80, height: 60 }} />}

        <h3>{question}</h3>
        <ol>
          {options.map((option, index) => {
            return (
              <li
                onClick={() => {
                  if (answered.index === -1) {
                    onClickHandler(option);
                    setAnswered({ index, value: option });
                  }
                }}
                key={index}
                className={`li-item ${answered.index === -1 ? "hover" : ""} ${
                  answered.index === -1 //make sure answer is given
                    ? ""
                    : index === answered.index // this element was clicked by the user
                    ? answered.value === correntAnswer // if the answer clicked by user is correct show green else red
                      ? "correct-ans"
                      : "wrong-ans"
                    : option === correntAnswer //
                    ? "correct-ans"
                    : ""
                }`}
              >
                {option}
                {answered.index !== -1 ? (
                  <span
                    style={{
                      float: "right",
                      color: "white",
                      fontSize: "28px",
                    }}
                    className="material-icons"
                  >
                    {index === answered.index
                      ? option === correntAnswer
                        ? "check_circle"
                        : "cancel"
                      : option === correntAnswer //
                      ? "check_circle"
                      : ""}
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
        {answered.index !== -1 && (
          <button
            className="next-btn"
            onClick={() => {
              setAnswered({ index: -1, value: "" });
              onNextHandler();
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default Quiz;
