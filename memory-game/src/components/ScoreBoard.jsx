import React, { useContext } from "react";
import CardContext from "../../store/card-context";
import playerOneImage from "../images/player-images/player-one.png";
import playerTwoImage from "../images/player-images/player-two.png";
import scoreboardChap from "../images/player-images/scoreboard-chap.png";

function ScoreBoard({ playAgainHandler }) {
  const { playerOneScore, playerTwoScore } = useContext(CardContext);

  const winner = playerOneScore > playerTwoScore ? 1 : 2;
  const loser = winner === 1 ? 2 : 1;

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
          winner === 1 ? playerOneScore : playerTwoScore
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
          loser === 1 ? playerOneScore : playerTwoScore
        }`}</p>
      </div>
      <button className="button" onClick={playAgainHandler}>
        Play again
      </button>
    </div>
  );
}

export default ScoreBoard;
