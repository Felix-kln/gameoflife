import React from "react";
import { Route, Routes } from "react-router-dom";
import GameOfLife from "./pages/GameOfLife/GameOfLife";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GameOfLife />}></Route>
      </Routes>
    </div>
  );
}

export default App;
