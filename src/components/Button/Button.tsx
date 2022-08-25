import { StyledButton } from "./styled";
import type { ButtonComponent } from "./types";

export const Button: ButtonComponent = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest} type="button">
      {children}
    </StyledButton>
  );
};
