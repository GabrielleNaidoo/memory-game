import React, { useContext } from "react";
import CardContext from "../../store/card-context";

function ScoreBoard(props) {
  const CardCtx = useContext(CardContext);
  let winner;
  let loser;
  if (CardCtx.playerOneScore > CardCtx.playerTwoScore) {
    winner = 1;
    loser = 2;
  } else if (CardCtx.playerOneScore < CardCtx.playerTwoScore) {
    winner = 2;
    loser = 1;
  }

  return (
    <div className="scoreboard">
      <p>Well done!</p>
      <h1>{`Player ${winner}`}</h1>
      <img></img>
      <div>
        <p>1st Place</p>
        <p>{`Player ${winner}`}</p>
        <p>{`Score: ${
          winner === 1 ? CardCtx.playerOneScore : CardCtx.playerTwoScore
        }`}</p>
      </div>
      <div>
        {winner && <p>2nd Place</p>}
        <p>{`Player ${loser}`}</p>
        <p>{`Score: ${
          loser === 1 ? CardCtx.playerOneScore : CardCtx.playerTwoScore
        }`}</p>
      </div>
      <button onClick={props.playAgainHandler}>Play again</button>
    </div>
  );
}

export default ScoreBoard;
