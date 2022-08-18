import React from "react";
import styled from "styled-components";
import { DialogContent } from "./DialogContent";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2b292980;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

interface IDialog {
  open: boolean;
  children: any;
  setOpen: any;
}

export const Dialog = (props: IDialog) => {
  const { open } = props;
  if (open) {
    return (
      <Backdrop
        onClick={() => {
          props.setOpen(false);
        }}
      >
        <DialogContent>{props.children}</DialogContent>
      </Backdrop>
    );
  } else {
    return <></>;
  }
};
