import {
  Button,
  Card,
  Col,
  Row,
  Typography
} from "antd";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import {
  CardDisplay,
  Generator,
  QRScanner
} from "../components";

const { Title, Paragraph: P, Link: L } = Typography;

export const HomePage: React.FC = () => {
  const [data, setData] = React.useState("");
  const handleScan = useCallback((data: string) => {
    setData(data);
  }, []);
  const handleScanError = useCallback((err: string) => {
    console.error(err);
    setData(err);
  }, []);

  return (
    <div className={"home-page"}>
      <Title>Arkham Horror Card Interface</Title>
      <div className="nav-links">
        <Link to="/">
          <Button type="link">Home</Button>
        </Link>
        |
        <Link to="/stream">
          <Button type="link">Stream</Button>
        </Link>
      </div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Card" style={{ minWidth: "500px", minHeight: "500px" }}>
            <CardDisplay cardId={data} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="QR Scanner">
            <QRScanner onScan={handleScan} onError={handleScanError} />
            <pre>{data}</pre>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="QR Generator">
            <Generator />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Info">
            <P>
              This is a tool designed for use in streaming{" "}
              <L href="https://www.fantasyflightgames.com/en/products/arkham-horror-the-card-game/">
                Arkham Horror: The Card Game
              </L>
              . It allows you to create QR codes for you cards (corresponding to
              the card ID), and then scan the code to get a digital image.
            </P>
            <P>
              Use this page for testing your setup, camera alignment, and for
              generating QR codes. Use <Link to="/stream">/stream</Link> as your
              OBS browser source. The card display area is <b>400px</b> by{" "}
              <b>400px</b>.
            </P>
            <P>
              If there are any questions, suggestions, feedback or bugs, you can
              raise an{" "}
              <L href="https://github.com/Samuel-Lewis/arkham-card-interface/issues">
                issue on the GitHub repo
              </L>
              .
            </P>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
