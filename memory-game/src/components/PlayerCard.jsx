import React, { useState, useContext } from "react";

function PlayerCard(props) {
  return (
    <div className="player_container">
      <div>{props.player}</div>
    </div>
  );
}

export default PlayerCard;
