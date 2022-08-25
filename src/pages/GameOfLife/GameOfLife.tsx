import { useCallback, useEffect, useState } from "react";
import { Grid, Button, Cell, Controls, Layout } from "../../components";
import { useDragging } from "../../hooks";
import { createGrid } from "./utils";
import { GameOfLifeComponent } from "./types";

export const GameOfLife: GameOfLifeComponent = ({
  width,
  height,
  getNextGridState,
}) => {
  const [grid, setGrid] = useState(() => createGrid({ width, height }));
  const [play, setPlay] = useState(false);
  const gridRef = useDragging<HTMLDivElement>();

  const handleNextGameTick = useCallback(() => {
    setGrid((prevState) => getNextGridState(prevState));
  }, [getNextGridState]);

  useEffect(() => {
    setGrid((currentGridState) => {
      const nextGridState = createGrid({ width, height });
      currentGridState.forEach((col, xPos) => {
        col.forEach((currentState, yPos) => {
          if (nextGridState?.[xPos]?.[yPos] !== undefined) {
            nextGridState[xPos][yPos] = currentState;
          }
        });
      });
      return nextGridState;
    });
  }, [width, height]);

  useEffect(() => {
    if (play) {
      const timeoutId = setTimeout(handleNextGameTick, 200);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [play, grid, handleNextGameTick]);

  const handleCellClick = useCallback((xPos: number, yPos: number) => {
    setGrid((prevGrid) => {
      return prevGrid.map((col, currentXPos) =>
        col.map((state, currentYPos) =>
          currentXPos === xPos && currentYPos === yPos ? !state : state
        )
      );
    });
  }, []);

  const handlePlayButton = useCallback(() => {
    setPlay((prevState) => !prevState);
  }, []);

  const handleResetButton = useCallback(() => {
    setGrid(createGrid({ width, height }));
  }, [width, height]);

  return (
    <Layout pageTitle="Game of Life">
      <Grid
        ref={gridRef}
        grid={grid}
        renderCell={(cellState, xPos, yPos) => (
          <Cell
            label={`toggle cell (${xPos}, ${yPos}) state to ${
              cellState ? "alive" : "dead"
            }`}
            key={`${xPos}${yPos}`}
            alive={cellState}
            onClick={() => handleCellClick(xPos, yPos)}
          />
        )}
      />
      <Controls>
        <Button onClick={handlePlayButton}>{play ? "Stop" : "Start"}</Button>
        <Button onClick={handleNextGameTick}>Next</Button>
        <Button onClick={handleResetButton}>Reset</Button>
      </Controls>
    </Layout>
  );
};
