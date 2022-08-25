import { forwardRef } from "react";
import { StyledGrid } from "./styled";
import type { GridProps } from "./types";

export const Grid = forwardRef<HTMLDivElement, GridProps>(function GridWithRef(
  { grid, renderCell },
  ref
) {
  return (
    <StyledGrid ref={ref} width={grid.length}>
      {grid.map((rows, xPos) =>
        rows.map((cellState, yPos) => renderCell(cellState, xPos, yPos))
      )}
    </StyledGrid>
  );
});
