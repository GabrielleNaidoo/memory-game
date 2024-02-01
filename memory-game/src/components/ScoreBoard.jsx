import React, { useContext } from "react";
import CardContext from "../../store/card-context";
import playerOneImage from "../images/player-images/player-one.png";
import playerTwoImage from "../images/player-images/player-two.png";
import scoreboardChap from "../images/player-images/scoreboard-chap.png";

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
      <h1>Well done!</h1>
      <h1>{`Player ${winner}`}</h1>
      <img src={scoreboardChap} alt="scoreboard image"></img>
      <div className="scoreboard_box scoreboard_box_1">
        <img
          className="scoreboard_box_image"
          src={winner === 1 ? playerOneImage : playerTwoImage}
          alt="scoreboard image"
        ></img>
        <p className="scoreboard_box_place">1st Place</p>
        <p className="scoreboard_box_player">{`Player ${winner}`}</p>
        <p className="scoreboard_box_score">{`Score: ${
          winner === 1 ? CardCtx.playerOneScore : CardCtx.playerTwoScore
        }`}</p>
      </div>
      <div className="scoreboard_box">
        <img
          className="scoreboard_box_image"
          src={loser === 1 ? playerOneImage : playerTwoImage}
          alt="scoreboard image"
        ></img>
        <p className="scoreboard_box_place">2nd Place</p>
        <p className="scoreboard_box_player">{`Player ${loser}`}</p>
        <p className="scoreboard_box_score">{`Score: ${
          loser === 1 ? CardCtx.playerOneScore : CardCtx.playerTwoScore
        }`}</p>
      </div>
      <button className="button" onClick={props.playAgainHandler}>
        Play again
      </button>
    </div>
  );
}

export default ScoreBoard;
