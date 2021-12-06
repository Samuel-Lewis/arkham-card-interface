import React, { useEffect } from "react";

export type CardDisplayProps = {
  cardId: string;
};

const baseUrl = "https://arkhamdb.com";

export const CardDisplay: React.FC<CardDisplayProps> = ({ cardId }) => {
  const [cardData, setCardData] = React.useState<any>({});
  const url = `${baseUrl}/api/public/card/${cardId}`;

  useEffect(() => {
    if (!cardId) {
      return;
    }
    console.log("fetch");
    fetch(url)
      .then((response) => response.json())
      .then(setCardData)
      .then((data) => console.log(data));
  }, [cardId, url]);

  return (
    <div style={{ width: "420px", height: "420px" }}>
      {cardData && cardData.imagesrc && (
        <img alt={cardData.name} src={`${baseUrl}${cardData.imagesrc}`} />
      )}
    </div>
  );
};
