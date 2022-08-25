import React from "react";

export type Grid = Array<Array<boolean>>;
export type GridDimensions = {
  height: number;
  width: number;
};
export type CreateGrid = (dimensions: GridDimensions) => Grid;

export type GameOfLifeProps = React.PropsWithChildren<
  GridDimensions & {
    getNextGridState: (currentGridState: Grid) => Grid;
  }
>;
export type GameOfLifeComponent = React.FunctionComponent<GameOfLifeProps>;
