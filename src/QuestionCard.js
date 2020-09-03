import React from "react";

function QuestionCard({
  currentQuestion,
  numberofQuestions,
  questionNum,
  updateScore,
}) {
  console.log(currentQuestion);

  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  const answers = shuffle([
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ]);

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
          {answers.map(answer => {
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
