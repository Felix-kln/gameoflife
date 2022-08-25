import { Header } from "../Header";
import { StyledLayout, StyledMain } from "./styled";
import type { LayoutComponent } from "./types";

export const Layout: LayoutComponent = ({ pageTitle, children }) => {
  return (
    <StyledLayout>
      <Header pageTitle={pageTitle} />
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  );
};
