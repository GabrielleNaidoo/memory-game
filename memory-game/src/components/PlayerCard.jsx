import React, { useState, useContext } from "react";

function PlayerCard(props) {
  return (
    <div className="player_container">
      <img src={props.playerDetails.image} alt="Player image"></img>
      <div>{props.playerDetails.title}</div>
      <div className="name">{props.playerDetails.playerName}</div>
      <div>SCORE: {props.playerDetails.playerScore}</div>
    </div>
  );
}

export default PlayerCard;
