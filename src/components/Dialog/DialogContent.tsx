import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 80%;
  height: 80%;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #38393c;
  z-index: 5;
  padding: 16px;
  border-radius: 24px;
`;

const Content = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
`;

export const DialogContent = (props: any) => {
  return (
    <ContentWrapper onClick={(e) => e.stopPropagation()}>
      <Content>{props.children}</Content>
    </ContentWrapper>
  );
};
