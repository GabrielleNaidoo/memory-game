import { useState, useEffect } from "react";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import cardData from "./data.js";
import PlayerModal from "./components/PlayerModal";
import Card from "./components/Card";
import "./styles/App.css";

function App() {
  const navigate = useNavigate();
  const [cards, setCards] = useState(cardData);
  const [cardCount, setCardCount] = useState(0);
  const [currentSet, setCurrentSet] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function exitGameHandler() {
    const isConfirmed = window.confirm(
      "Are you sure you want to exit the game?"
    );
    if (isConfirmed) {
      navigate(-1);
    }
  }

  function restartHandler() {
    const shuffledCards = shuffleArray([...cards]);
    setCards(shuffledCards);
  }

  const cardSet = cards.map((card) => {
    return (
      <Card key={card.id} individualCardData={card} cardCount={cardCount} />
    );
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<PlayerModal />}></Route>
        <Route
          path="/game"
          element={
            <div className="container">
              <div className="button_container">
                <button className="restart_btn button" onClick={restartHandler}>
                  Restart game
                </button>
                <button className="exit_btn button" onClick={exitGameHandler}>
                  Exit Game
                </button>
              </div>
              <h1 className="title">Memory</h1>
              <div className="game">
                <div className="player_one player_container">
                  <div>Player One</div>
                </div>
                <div className="cards_container">{cardSet}</div>
                <div className="player_two player_container">
                  <div>Player Two</div>
                </div>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
