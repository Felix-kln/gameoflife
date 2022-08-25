import { Grid } from "../types";

const neighborPositions = [
  [-1, -1], // up left
  [-1, 0], // up
  [-1, 1], // up right
  [0, 1], // right
  [1, 1], // down right
  [1, 0], // down
  [1, -1], // down left
  [0, -1], // left
];

export const getLivingNeighbors = (
  currentGrid: Grid,
  xPos: number,
  yPos: number
) => {
  let livingNeighbors = 0;
  neighborPositions.some(([row, column]) => {
    // cell neighbor is alive
    if (currentGrid?.[xPos + row]?.[yPos + column] === true) {
      livingNeighbors++;

      if (livingNeighbors > 3) {
        // if more than 3 are alive we can skip checking the other neighbors
        return true;
      }
    }

    return false;
  });
  return livingNeighbors;
};
