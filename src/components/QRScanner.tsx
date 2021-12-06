import React, { useCallback } from "react";
import QrReader from "react-qr-reader";

export type QRScannerProps = {
  onScan?: (data: string) => void;
  onError?: (error: string) => void;
  visible?: boolean;
};

export const QRScanner: React.FC<QRScannerProps> = ({
  onScan,
  onError,
  visible,
}) => {
  const handleScan = useCallback(
    (data) => {
      if (onScan) {
        onScan(data);
      }
    },
    [onScan]
  );

  const handleError = useCallback(
    (err) => {
      if (err && onError) {
        onError(err);
      }
    },
    [onError]
  );

  const width = visible ?? true ? "100%" : 0;

  return (
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width }}
    />
  );
};
