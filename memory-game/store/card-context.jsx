import { createContext, useState, useEffect } from "react";
import cardData from "../src/data.js";

const CardContext = createContext({
  cardData: [],
  firstSet: {},
  secondSet: {},
  currentPlayer: null,
  playerOneScore: null,
  playerTwoScore: null,
  endDisplay: false,
  clickHandler: (id) => {},
  shuffleHandler: () => {},
  setCardData: (updatedData) => {},
  restartGame: () => {},
});

export function CardContextProvider(props) {
  const [cards, setCards] = useState(cardData);
  const [count, setCount] = useState(0);
  const [firstSet, setFirstSet] = useState({});
  const [secondSet, setSecondSet] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [endDisplay, setEndDisplay] = useState(false);

  function shuffleHandler() {
    const shuffledCards = [...cardData];
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
    setCount(0);
    setFirstSet({});
    setSecondSet({});
    setCurrentPlayer(1);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  }

  function nextPlayer() {
    setCount(0);
    setFirstSet({});
    setSecondSet({});
    currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
  }

  useEffect(() => {
    if (count === 2) {
      if (
        firstSet?.value === secondSet?.value &&
        firstSet?.color === secondSet?.color
      ) {
        // setCards((prev) => prev.filter((card) => card.id !== id));
        setTimeout(() => {
          setCards((prev) =>
            prev.filter(
              (card) => card.id !== firstSet.id && card.id !== secondSet.id
            )
          );
        }, 1500);
        currentPlayer === 1
          ? setPlayerOneScore((prev) => prev + 1)
          : setPlayerTwoScore((prev) => prev + 1);
        nextPlayer();
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstSet.id || card.id === secondSet.id
                ? { ...card, flipped: true }
                : card
            )
          );
          nextPlayer();
        }, 1500);
      }
    }

    if (cards.length === 0) {
      setEndDisplay(true);
    }
  }, [
    cards.length,
    count,
    currentPlayer,
    firstSet?.color,
    firstSet.id,
    firstSet?.value,
    nextPlayer,
    secondSet?.color,
    secondSet.id,
    secondSet?.value,
  ]);

  function clickHandler(id) {
    const currentCardData = cards.find((card) => card.id === id);

    if (count < 2) {
      count === 1
        ? setFirstSet({ ...currentCardData })
        : setSecondSet({ ...currentCardData });
      setCards((prev) =>
        prev.map((card) =>
          card.id === id ? { ...card, flipped: false } : card
        )
      );
      setCount((prev) => prev + 1);
    }
  }

  //temp:
  useEffect(() => {
    console.log(count, cards);
  }, [count, cards]);

  const context = {
    cardData: cards,
    currentPlayer,
    playerOneScore,
    playerTwoScore,
    endDisplay,
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
