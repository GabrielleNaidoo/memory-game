import { useState, useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import cardData from "./data.js";
import PlayerModal from "./components/PlayerModal";
import Card from "./components/Card";
import "./styles/App.css";

function App() {
  const [cards, setCards] = useState(cardData);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const restartHandler = () => {
    const shuffledCards = shuffleArray([...cards]);
    setCards(shuffledCards);
  };

  const cardSet = cards.map((card) => {
    return (
      <div className="card_container" key={card.id}>
        <Card individualCardData={card} />
      </div>
    );
  });

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
              <div className="cards_container">{cardSet}</div>
              <div className="player_two player_container">
                <h1>Player Two</h1>
              </div>
              <button onClick={restartHandler}>Restart game</button>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
