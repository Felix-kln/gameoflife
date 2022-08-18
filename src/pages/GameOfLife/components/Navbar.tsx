import React from "react";
import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  height: 60px;
  background-color: blue;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Navbar = () => {
  return <Navigation>Game of Life</Navigation>;
};
