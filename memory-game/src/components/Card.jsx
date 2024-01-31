import React, { useState, useEffect } from "react";
import cardBack from "../images/card-images/card-back.png";

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [timerCompleted, setTimerCompleted] = useState(false);
  const [cardCount, setCardCount] = useState(props.cardCount);

  function clickHandler() {
    if (timerCompleted && cardCount < 2) {
      setIsFlipped((prev) => !prev);
      setCardCount((prev) => prev + 1);
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFlipped(true);
      setTimerCompleted(true);
    }, 10000);

    // Clear timeout if the component unmounts or if the card is flipped manually
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="card_container">
      {!isFlipped && (
        <div className="card_front">
          <img
            className="card_image"
            src={props.individualCardData.image}
            alt={`${props.individualCardData.value} of ${props.individualCardData.suit}`}
            onClick={clickHandler}
          />
        </div>
      )}
      {isFlipped && (
        <div className="card_back">
          <img
            className="card_image"
            src={cardBack}
            alt={"Back of card"}
            onClick={clickHandler}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
