import { StyledHeader, StyledPageTitle } from "./styled";
import type { HeaderComponent } from "./types";

export const Header: HeaderComponent = ({ pageTitle, ...rest }) => {
  return (
    <StyledHeader {...rest}>
      <StyledPageTitle>{pageTitle}</StyledPageTitle>
    </StyledHeader>
  );
};
