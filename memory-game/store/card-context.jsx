import { createContext, useState } from "react";
import cardData from "../src/data.js";

const CardContext = createContext({
  cardData: [],
  currentCount: null,
  currentSet: [],
  playerOneScore: null,
  playerTwoScore: null,
  cardClickHandler: (card) => {},
});

export function CardContextProvider(props) {
  const [cards, setCards] = useState(cardData);
  const [count, setCount] = useState(0);
  const [currentCardSet, setCurrentCardSet] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  function handleCardClick(id) {
    setCount((prev) => prev + 1);
    const currentCardData = cardData.filter((card) => card.id === id)[0];
    setCurrentCardSet((prev) => [...prev, { ...currentCardData }]);
  }

  const context = {
    cardData: cards,
    currentCount: count,
    currentSet: currentCardSet,
    playerOneScore: playerOne,
    playerTwoScore: playerTwo,
    cardClickHandler: handleCardClick,
  };

  return (
    <CardContext.Provider value={context}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContext;
