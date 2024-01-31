import { createContext, useState } from "react";

const CardContext = createContext({
  currentCount: 0,
  currentSet: [],
  playerOneScore: 0,
  playerTwoScore: 0,
});

export function CardContextProvider(props) {
  const [count, setCount] = useState(0);
  const [currentCardSet, setCurrentCardSet] = useState([]);
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  const context = {
    currentCount: count,
    currentSet: currentCardSet,
    playerOneScore: playerOne,
    playerTwoScore: playerTwo,
  };

  return (
    <CardContext.Provider value={context}>
      {props.children}
    </CardContext.Provider>
  );
}
