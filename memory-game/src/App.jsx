import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import cardData from "./data.js";
import PlayerModal from "./components/PlayerModal";
import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PlayerModal />}></Route>
        <Route
          path="/game"
          element={
            <div className="game_container">
              <div className="player_one player_container">
                <h1>Player One</h1>
              </div>
              <div className="cards_container">
                <h1>I am the game!</h1>
              </div>
              <div className="player_two player_container">
                <h1>Player Two</h1>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
