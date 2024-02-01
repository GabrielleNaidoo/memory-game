import React, { useState, useContext } from "react";
import CardContext from "../../store/card-context.jsx";

function PlayerCard({ playerDetails }) {
  const CardCtx = useContext(CardContext);

  return (
    <div className="player_container">
      <div className="player_card">
        <img src={playerDetails.image} alt="Player image"></img>
        <div>{playerDetails.title}</div>
        <div className="name">{playerDetails.playerName}</div>
        <div>SCORE: {playerDetails.playerScore}</div>
      </div>
      {CardCtx.currentPlayer === playerDetails.number && (
        <div className="turn_indicator">It's your turn!</div>
      )}
    </div>
  );
}

export default PlayerCard;
