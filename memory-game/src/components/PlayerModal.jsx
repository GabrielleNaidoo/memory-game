import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import playerOneImage from "../images/player-images/player-one.png";
import playerTwoImage from "../images/player-images/player-two.png";

function PlayerModal() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [playerNames, setPlayerNames] = useState({
    playerOne: "",
    playerTwo: "",
  });

  function changeHandler(event) {
    const { value, name } = event.target;
    setPlayerNames((prev) => ({ ...prev, [name]: value }));
  }

  function startGameHandler() {
    if (playerNames.playerOne && playerNames.playerTwo) {
      setIsOpen(false);
      navigate("/game", { state: { playerNames } });
    } else {
      alert("Please enter names for both players!");
    }
  }

  function exitGameHandler() {
    const isConfirmed = window.confirm(
      "Are you sure you want to exit the game?"
    );
    if (isConfirmed) {
      window.close() || alert("Please close site manually");
    }
  }

  return (
    isOpen && (
      <div className="modal_container">
        <div>
          <div className="exit">
            <button className="exit_btn button" onClick={exitGameHandler}>
              Exit Game
            </button>
          </div>
          <h1 className="title">Memory</h1>
          <div className="subtitle">Are you ready to play?</div>
          <div className="form">
            <div className="playerOne player">
              <img
                className="player_img"
                src={playerOneImage}
                alt="cartoon astronaut image"
              />
              <input
                placeholder="NAME OF PLAYER ONE"
                type="text"
                name="playerOne"
                value={playerNames.playerOne}
                onChange={changeHandler}
              ></input>
            </div>
            <div className="playerTwo player">
              <img
                className="player_img"
                src={playerTwoImage}
                alt="cartoon astronaut image"
                width="5rem"
                height="5rem"
              />
              <input
                placeholder="NAME OF PLAYER TWO"
                type="text"
                name="playerTwo"
                value={playerNames.playerTwo}
                onChange={changeHandler}
              ></input>
            </div>
          </div>
          <div className="start">
            <button className="start_btn button" onClick={startGameHandler}>
              Let's play!
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default PlayerModal;
