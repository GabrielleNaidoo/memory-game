import { useState, useEffect, useContext } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import CardContext from "../store/card-context.jsx";
import PlayerModal from "./components/PlayerModal";
import Card from "./components/Card";
import PlayerCard from "./components/PlayerCard";
import "./styles/App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const CardCtx = useContext(CardContext);
  const [cards, setCards] = useState(CardCtx.cardData);

  const { playerOne, playerTwo } = location.state?.playerNames || {};

  function flipTimer() {
    const timeoutId = setTimeout(() => {
      setCards((prev) => prev.map((el) => ({ ...el, flipped: true })));
    }, 10000);

    return () => clearTimeout(timeoutId);
  }

  useEffect(() => {
    flipTimer();
  }, [cards]);

  function exitGameHandler() {
    const isConfirmed = window.confirm(
      "Are you sure you want to exit the game?"
    );
    if (isConfirmed) {
      navigate(-1);
    }
  }

  CardCtx.shuffleHandler(cards);

  function restartHandler() {
    const shuffledCards = CardCtx.shuffleHandler([...cards]);
    setCards(shuffledCards);
    setCards((prev) => prev.map((el) => ({ ...el, flipped: false })));

    flipTimer();
  }

  function handleClick(id) {
    CardCtx.clickHandler(id);
  }

  useEffect(() => {
    if (
      CardCtx.currentSet.length === 2 &&
      CardCtx.currentSet[0].color === CardCtx.currentSet[1].color &&
      CardCtx.currentSet[0].value === CardCtx.currentSet[1].value
    ) {
      const timeoutId = setTimeout(() => {
        setCards((prev) =>
          prev.filter(
            (card) =>
              card.id !== CardCtx.currentSet[0].id &&
              card.id !== CardCtx.currentSet[1].id
          )
        );
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [CardCtx]);

  const cardSet = cards.map((card) => {
    return (
      <Card
        key={card.id}
        individualCardData={card}
        clickHandler={() => handleClick(card.id)}
      />
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
                <PlayerCard
                  playerDetails={{
                    playerName: playerOne,
                    playerScore: CardCtx.playerOneScore,
                    title: "Player one",
                  }}
                />
                <div className="cards_container">{cardSet}</div>
                <PlayerCard
                  playerDetails={{
                    playerName: playerTwo,
                    playerScore: CardCtx.playerTwoScore,
                    title: "Player two",
                  }}
                />
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
