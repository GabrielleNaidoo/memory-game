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
            <div>
              <h1>I am the game!</h1>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
