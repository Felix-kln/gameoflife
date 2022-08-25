import { getLivingNeighbors } from "./getLivingNeighbors";
import { getNextCellState } from "./getNextCellState";
import type { Grid } from "../types";

export const getNextGridState = (currentGridState: Grid) => {
  const nextGridState = currentGridState.map((col) =>
    col.map((state) => state)
  );

  currentGridState.forEach((col, xPos) => {
    col.forEach((currentState, yPos) => {
      nextGridState[xPos][yPos] = getNextCellState(
        currentState,
        getLivingNeighbors(currentGridState, xPos, yPos)
      );
    });
  });

  return nextGridState;
};
