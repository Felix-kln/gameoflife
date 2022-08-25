import styled from "styled-components";

export const StyledGrid = styled.div<{ width: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.width}, 25px);
  grid-auto-rows: 25px;
  overflow: hidden;
  margin-top: auto;
`;
