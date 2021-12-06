import "./App.less";
import { Button } from "antd";
import React from "react";
import {
  Link,
  Route,
  Routes
} from "react-router-dom";
import {
  HomePage,
  StreamPage
} from "./pages";

function App() {
  return (
    <div className="App">
      <div className="nav-links">
        <Button type="link">
          <Link to="/">Home</Link>
        </Button>
        |
        <Button type="link">
          <Link to="/stream">Stream</Link>
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stream" element={<StreamPage />} />
      </Routes>
    </div>
  );
}

export default App;
