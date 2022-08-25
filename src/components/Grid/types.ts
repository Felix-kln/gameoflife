export type GridProps = {
  grid: Array<Array<boolean>>;
  renderCell: (cellState: boolean, xPos: number, yPos: number) => JSX.Element;
};
