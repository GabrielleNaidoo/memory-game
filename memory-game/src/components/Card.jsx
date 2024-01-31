import React, { useState, useEffect, useContext } from "react";
import CardContext from "../../store/card-context";
import cardBack from "../images/card-images/card-back.png";

function Card(props) {
  const CardCtx = useContext(CardContext);
  const [timerCompleted, setTimerCompleted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.individualCardData.flipped = true;
      setTimerCompleted(true);
    }, 10000);

    // Clear timeout if the component unmounts or if the card is flipped manually
    return () => clearTimeout(timeoutId);
  }, [props.individualCardData]);

  return (
    <div className="card_container">
      {!props.individualCardData.flipped && (
        <div className="card_front">
          <img
            className="card_image"
            src={props.individualCardData.image}
            alt={`${props.individualCardData.value} of ${props.individualCardData.suit}`}
          />
        </div>
      )}
      {props.individualCardData.flipped && (
        <div className="card_back">
          <img
            className="card_image"
            src={cardBack}
            alt={"Back of card"}
            onClick={props.clickHandler}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
