export const getNextCellState = (
  currentCellState: boolean,
  aliveNeighbors: number
) => {
  if (!currentCellState && aliveNeighbors === 3) {
    return true;
  } else if (currentCellState && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
    return false;
  }

  return currentCellState;
};
