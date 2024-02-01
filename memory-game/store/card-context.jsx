import { createContext, useState, useEffect } from "react";
import cardData from "../src/data.js";

const CardContext = createContext({
  cardData: [],
  currentSet: [],
  currentPlayer: null,
  playerOneScore: null,
  playerTwoScore: null,
  clickHandler: (id) => {},
  shuffleHandler: () => {},
  setCardData: (updatedData) => {},
  restartGame: () => {},
});

export function CardContextProvider(props) {
  const [cards, setCards] = useState(cardData);
  const [count, setCount] = useState(0);
  const [currentSet, setCurrentSet] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  function shuffleHandler() {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }
    setCardData(shuffledCards.map((card) => ({ ...card, flipped: true })));
  }

  function setCardData(updatedData) {
    setCards(updatedData);
  }

  function restartGame() {
    shuffleHandler();
    setCurrentSet([]);
    setCurrentPlayer(1);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  }

  function clickHandler(id) {
    const currentCardData = cards.find((card) => card.id === id);

    if (count < 2) {
      setCurrentSet((prev) => {
        return [...prev, { ...currentCardData }];
      });
      setCards((prev) =>
        prev.map((card) =>
          card.id === id ? { ...card, flipped: false } : card
        )
      );
      setCount((prev) => prev + 1);
    }

    // Add logic for checking matches and updating scores

    // ...

    // Check if the game is finished
    if (cards.length === 0) {
      // Handle game end logic
    }
  }
  useEffect(() => {
    console.log(count);
    console.log(currentSet);
  }, [count, currentSet]);

  const context = {
    cardData: cards,
    currentSet,
    currentPlayer,
    playerOneScore,
    playerTwoScore,
    // clickHandler,
    shuffleHandler,
    setCardData,
    restartGame,
    clickHandler,
  };

  return (
    <CardContext.Provider value={context}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContext;
