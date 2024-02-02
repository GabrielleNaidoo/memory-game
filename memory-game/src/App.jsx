import { useState, useEffect, useContext } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import CardContext from "../store/card-context.jsx";
import PlayerModal from "./components/PlayerModal";
import Card from "./components/Card";
import PlayerCard from "./components/PlayerCard";
import ScoreBoard from "./components/ScoreBoard";
import playerOneImg from "./images/player-images/player-one.png";
import playerTwoImg from "./images/player-images/player-two.png";
import backgroundImage from "./images/end-background.png";

import "./styles/App.css";
import "./styles/Media.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const CardCtx = useContext(CardContext);
  const { playerOne, playerTwo } = location.state?.playerNames || {};

  //First call
  useEffect(() => {
    CardCtx.shuffleHandler();
  }, []);

  function scoreNavigator() {
    navigate("/score-board");
  }
  function handlePlayAgain() {
    navigate("/");
    CardCtx.restartGame();
  }

  function restartHandler() {
    CardCtx.restartGame();
  }

  function exitGameHandler() {
    const isConfirmed = window.confirm(
      "Are you sure you want to exit the game?"
    );
    if (isConfirmed) {
      navigate("/");
    }
  }

  const cardSet = CardCtx.cardData.map((card) => {
    return (
      <Card
        key={card.id}
        individualCardData={card}
        clickHandler={CardCtx.clickHandler}
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
            <div>
              <div className="button_container">
                {!CardCtx.endDisplay && (
                  <button
                    className="restart_btn button"
                    onClick={restartHandler}
                  >
                    Restart game
                  </button>
                )}
                {CardCtx.endDisplay && (
                  <button
                    className="restart_btn button"
                    onClick={scoreNavigator}
                  >
                    Scores
                  </button>
                )}
                <button className="exit_btn button" onClick={exitGameHandler}>
                  Exit Game
                </button>
              </div>
              <h1 className="title">Memory</h1>
              <div className="game">
                <PlayerCard
                  className="player_one_card"
                  playerDetails={{
                    playerName: playerOne,
                    playerScore: CardCtx.playerOneScore,
                    title: "PLAYER ONE",
                    image: playerOneImg,
                    number: 1,
                  }}
                />
                <div
                  className="cards_container"
                  style={
                    CardCtx.endDisplay
                      ? {
                          backgroundImage: `url(${backgroundImage})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          border: "2px solid white",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "80%",
                        }
                      : {}
                  }
                >
                  {!CardCtx.endDisplay ? (
                    cardSet
                  ) : (
                    <h1 className="cards_container_h1">It's a Match!</h1>
                  )}
                </div>
                {/* )} */}
                <PlayerCard
                  className="player_two_card"
                  playerDetails={{
                    playerName: playerTwo,
                    playerScore: CardCtx.playerTwoScore,
                    title: "PLAYER TWO",
                    image: playerTwoImg,
                    number: 2,
                  }}
                />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/score-board"
          element={<ScoreBoard playAgainHandler={handlePlayAgain} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
