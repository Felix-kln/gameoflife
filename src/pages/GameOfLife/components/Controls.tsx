import React from "react";
import styled from "styled-components";

const ControlComponent = styled.div`
  width: 100%;
  height: 60px;
  background-color: red;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const Controls = (props: any) => {
  return <ControlComponent {...props}>{props.children}</ControlComponent>;
};
