import React, { useState, useContext } from "react";
import CardContext from "../../store/card-context.jsx";

function PlayerCard(props) {
  const CardCtx = useContext(CardContext);

  return (
    <div className="player_container">
      <div className="player_card">
        <img src={props.playerDetails.image} alt="Player image"></img>
        <div>{props.playerDetails.title}</div>
        <div className="name">{props.playerDetails.playerName}</div>
        <div>SCORE: {props.playerDetails.playerScore}</div>
      </div>
      {CardCtx.currentPlayer === props.playerDetails.number && (
        <div className="turn_indicator">It's your turn!</div>
      )}
    </div>
  );
}

export default PlayerCard;
