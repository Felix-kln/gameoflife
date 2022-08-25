import { StyledControls } from "./styled";
import type { ControlsComponent } from "./types";

export const Controls: ControlsComponent = ({ children }) => {
  return <StyledControls>{children}</StyledControls>;
};
