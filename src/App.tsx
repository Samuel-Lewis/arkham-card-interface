import "./App.less";
import React from "react";
import {
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stream" element={<StreamPage />} />
      </Routes>
    </div>
  );
}

export default App;
