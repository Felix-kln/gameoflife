import styled from "styled-components";

// changed the styles since that blue and black color were aweful
// not beeing a designer is fine but at least check color contrasts
// see: https://medium.com/rocket-mortgage-technology-blog/color-contrast-inside-chromes-devtools-b3f70f8e1d12
export const StyledHeader = styled.header`
  padding: 10px 20px;
  background-color: #ddd;
  border-bottom: 2px solid #aaa;
`;

// you should use relative units for font-sizes they have a lot of accessability benefits when used that way
export const StyledPageTitle = styled.h1`
  font-size: 2rem;
`;
