import React from "react";

function QuestionCard(props) {
  const {
    currentQuestion,
    numberofQuestions,
    questionNum,
    updateScore,
  } = props;

  const checkAnswer = e => {
    let decodedAnswer = decodeURIComponent(currentQuestion.correct_answer);
    if (e.target.value === decodedAnswer) {
      updateScore(true);
    } else {
      updateScore(false);
    }
  };

  return (
    <div>
      <div>
        <h1>{`Question ${questionNum + 1} of ${numberofQuestions}`}</h1>
        <p>{decodeURIComponent(currentQuestion.category)}</p>
        {currentQuestion.difficulty === "easy" ? (
          <p>
            <i class='fas fa-star'></i>
          </p>
        ) : currentQuestion.difficulty === "medium" ? (
          <p>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
          </p>
        ) : (
          <p>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
          </p>
        )}
      </div>

      <div>
        <h2>{decodeURIComponent(currentQuestion.question)}</h2>
        <div id='answers__container'>
          {currentQuestion.answers.map(answer => {
            return (
              <button
                key={answer}
                value={decodeURIComponent(answer)}
                onClick={checkAnswer}
                className='answerButton'
              >
                {decodeURIComponent(answer)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
