import { Route, Routes } from "react-router-dom";
import { GameOfLife } from "./pages";
import { getNextGridState } from "./pages/GameOfLife/utils";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GameOfLife
            width={10}
            height={20}
            getNextGridState={getNextGridState}
          />
        }
      />
    </Routes>
  );
};

export default App;
