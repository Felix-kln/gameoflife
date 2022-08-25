import { CreateGrid, Grid } from "../types";

export const createGrid: CreateGrid = ({ width, height }) => {
  const gridRows: Grid = [];
  for (let rows = 0; rows < width; rows++) {
    gridRows.push(Array(height).fill(false));
  }
  return gridRows;
};
