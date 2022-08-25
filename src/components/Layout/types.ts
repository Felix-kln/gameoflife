import React from "react";

export type LayoutProps = React.PropsWithChildren<{
  pageTitle: string;
}>;

export type LayoutComponent = React.FunctionComponent<LayoutProps>;
