import React, { useState } from "react";
import "./App.css";

import QuestionCard from "./QuestionCard";

import questions from "./questions.json";

function App() {
  const [questionNum, setQuestionNum] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionNum]
  );
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [displayResult, setDisplayResult] = useState("");

  const numberofQuestions = questions.length;

  const nextQuestion = () => {
    let nextquestionNum = questionNum + 1;
    if (nextquestionNum < numberofQuestions) {
      setQuestionNum(nextquestionNum);
      setCurrentQuestion(questions[nextquestionNum]);
      setShowNext(false);
      setDisplayResult("");
    }
  };

  const updateScore = update => {
    setShowNext(true);
    if (update) {
      setDisplayResult("Correct");
      let currentScore = score + 1;
      setScore(currentScore);
    } else {
      setDisplayResult("Wrong");
    }
  };

  return (
    <div>
      {/* Progress bar */}
      <div className='progress__bar--outer'>
        <div
          style={{
            width: `${((questionNum + 1) / numberofQuestions) * 100}%`,
          }}
          id='progress__bar--inner'
        ></div>
      </div>

      <div className='container'>
        {/* Question Card */}
        <QuestionCard
          currentQuestion={currentQuestion}
          numberofQuestions={numberofQuestions}
          questionNum={questionNum}
          updateScore={updateScore}
        />

        {/* Next Button */}
        <div>
          <h3>{displayResult}</h3>
          {showNext && <button onClick={nextQuestion}>Next Question</button>}
        </div>

        {/* Score tracker */}
        <div>
          <div>
            <p>
              <span>{`Score: ${(score / numberofQuestions) * 100}%`}</span>
              <span style={{ float: "right" }}>{`Max Score: ${
                (score / numberofQuestions) * 100 +
                ((numberofQuestions - questionNum) / numberofQuestions) * 100
              }%`}</span>
            </p>

            <p style={{ float: "right" }}></p>
          </div>

          <div className='progress__bar--outer'>
            <div
              style={{
                width: `${(score / numberofQuestions) * 100}%`,
                background: "#000",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 90,
              }}
              id='progress__bar--inner'
            ></div>
            <div
              style={{
                width: `${(questionNum / numberofQuestions) * 100}%`,
                background: "#a9aaa9",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              id='progress__bar--inner'
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
