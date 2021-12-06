import {
  Button,
  Input,
  Space,
  Tooltip
} from "antd";
import React, {
  useCallback,
  useState
} from "react";
import QRCode from "react-qr-code";
import { SaveOutlined } from "@ant-design/icons";

export const Generator: React.FC = () => {
  const [label, setLabel] = useState<string>("");
  const handleInputChange = useCallback((evt) => {
    setLabel(evt.target.value);
  }, [setLabel]);

  const saveSVG = useCallback(() => {
    const svg = document.getElementById('qr-code')?.innerHTML;
    if (!svg) {
      return;
    }
    const blob = new Blob([svg.toString()]);
    const element = document.createElement("a");
    element.download = "w3c.png";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
  }, []);

  return (
    <Space direction="vertical" align="center" style={{ width: "100%" }}>
      <Space>
        <Input onChange={handleInputChange} placeholder="Card ID" />
        <Tooltip title="Download SVG">
          <Button icon={<SaveOutlined />} onClick={saveSVG} />
        </Tooltip>
      </Space>
      <QRCode id="qr-code" value={label} size={128} />
    </Space>
  );
};
