import React, { useState, useEffect, useContext } from "react";
import CardContext from "../../store/card-context";
import cardBack from "../images/card-images/card-back.png";

function Card({ individualCardData, clickHandler }) {
  const CardCtx = useContext(CardContext);
  const isMatched = CardCtx.matchedCards.includes(individualCardData.id);
  const [rotationStyle, setRotationStyle] = useState({});
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const image = new Image();
    image.src = individualCardData.image;
    image.onload = () => {
      setImageSrc(image.src);
    };
  }, [individualCardData.image]);

  useEffect(() => {
    if (!individualCardData.flipped) {
      setRotationStyle({
        transform: "rotateY(180deg)",
        transition: "transform 1s ease",
        transformStyle: "preserve-3d",
      });
    } else {
      setRotationStyle({});
    }
  }, [individualCardData.flipped]);

  return (
    <div
      className="card_container"
      style={{
        visibility: isMatched ? "hidden" : "visible",
        ...rotationStyle,
      }}
    >
      {!individualCardData.flipped && (
        <div className="card_front">
          <img
            className="card_image"
            src={imageSrc}
            alt={`${individualCardData.value} of ${individualCardData.suit}`}
          />
        </div>
      )}
      {individualCardData.flipped && (
        <div className="card_back">
          <img
            className="card_image"
            src={cardBack}
            alt={"Back of card"}
            onClick={() => clickHandler(individualCardData.id)}
          />
        </div>
      )}
    </div>
  );
}

const MemoizedCard = React.memo(Card);

export default MemoizedCard;

// export default Card;
