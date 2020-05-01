import React from "react";

const Result = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">Score {score} / 5</div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
