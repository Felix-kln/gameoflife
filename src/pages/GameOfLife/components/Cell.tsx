import React from "react";
import styled from "styled-components";

const CellStyled = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid black;
`;

export const Cell = ({ alive, onClick }: any) => {
  return (
    <CellStyled
      onClick={onClick}
      style={{ backgroundColor: alive ? "green" : "white" }}
    ></CellStyled>
  );
};
