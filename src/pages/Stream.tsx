import React, {
  useCallback,
  useState
} from "react";
import {
  CardDisplay,
  QRScanner
} from "../components";

export const StreamPage: React.FC = () => {
  const [cardId, setCardId] = useState<string>("");
  const handleScan = useCallback(
    (data: string) => {
      setCardId(data);
    },
    [setCardId]
  );

  return (
    <>
      <CardDisplay cardId={cardId} />
      <QRScanner onScan={handleScan} visible={false} />
    </>
  );
};
