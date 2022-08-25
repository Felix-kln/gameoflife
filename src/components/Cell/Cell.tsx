import { StyledCell } from "./styled";
import type { CellComponent } from "./types";

export const Cell: CellComponent = ({ alive, onClick, label }: any) => {
  return (
    <StyledCell
      aria-label={label}
      onClick={onClick}
      style={{ backgroundColor: alive ? "green" : "white" }}
    />
  );
};
