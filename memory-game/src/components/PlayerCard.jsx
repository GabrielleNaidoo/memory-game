import React, { useState, useContext } from "react";

function PlayerCard(props) {
  return (
    <div className="player_container">
      <div>{props.playerDetails.title}</div>
      <div>{props.playerDetails.playerName}</div>
      <div>{props.playerDetails.playerScore}</div>
    </div>
  );
}

export default PlayerCard;
