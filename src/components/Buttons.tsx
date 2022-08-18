import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: lightblue;
  border-radius: 16px;
  cursor: pointer;
`;

interface IButton {
  children?: any;
  onClick?: any;
}

export const Button = (props: IButton) => {
  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};
