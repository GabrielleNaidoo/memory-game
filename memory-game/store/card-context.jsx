import { createContext, useState, useEffect } from "react";
import cardData from "../src/data.js";

const CardContext = createContext({
  cardData: [],
  currentCount: null,
  currentSet: [],
  playerOneScore: null,
  playerTwoScore: null,
  clickHandler: (id) => {},
  shuffleHandlerHandler: () => {},
});

export function CardContextProvider(props) {
  const [cards, setCards] = useState(cardData);
  const [count, setCount] = useState(0);
  const [currentSet, setCurrentSet] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  function clickHandler(id) {
    const currentCardData = cardData.filter((card) => card.id === id)[0];
    if (count < 2) {
      setCurrentSet((prev) => [...prev, { ...currentCardData }]);
      setCount((prev) => prev + 1);
      cards.map((card) =>
        card.id === id ? { ...card, flipped: false } : card
      );
    } else {
      setCurrentSet((prev) => prev.splice(0, 2, { ...currentCardData }));
      setCount(0);
    }
  }

  function shuffleHandler(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const context = {
    cardData: cards,
    currentCount: count,
    currentSet,
    playerOneScore,
    playerTwoScore,
    clickHandler,
    shuffleHandler,
  };

  return (
    <CardContext.Provider value={context}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContext;
