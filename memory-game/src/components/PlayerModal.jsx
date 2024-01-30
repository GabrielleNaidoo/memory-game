import React, { useState, useNavigation } from "react";
import playerOneImage from "../images/player-one.jpg";
import playerTwoImage from "../images/player-two.jpg";

function PlayerModal() {
  const [playerNames, setPlayerNames] = useState({
    playerOne: "",
    playerTwo: "",
  });

  function changeHandler(event) {
    const { value, name } = event.target;
    setPlayerNames((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <div className="Header">
        <h1>Memory</h1>
        <button>Exit Game</button>
      </div>
      <h2>Are you ready to play?</h2>
      <div className="form">
        <div className="playerOne">
          <img
            className="player-avatar"
            src={playerOneImage}
            alt="cartoon astronaut image"
          />
          <input
            placeholder="name of player one"
            type="text"
            name="playerOne"
            value={playerNames.playerOne}
            onChange={changeHandler}
          ></input>
          <h3>{playerNames.playerOne}</h3>
        </div>
        <div className="playerTwo">
          <img
            className="player-avatar"
            src={playerTwoImage}
            alt="cartoon astronaut image"
            width="5rem"
            height="5rem"
          />
          <input
            placeholder="name of player two"
            type="text"
            name="playerTwo"
            value={playerNames.playerTwo}
            onChange={changeHandler}
          ></input>
          <h3>{playerNames.playerTwo}</h3>
        </div>
      </div>
      <button>Let's play!</button>
    </div>
  );
}

export default PlayerModal;
