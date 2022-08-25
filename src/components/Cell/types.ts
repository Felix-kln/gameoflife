export type CellProps = {
  alive: boolean;
  onClick: React.MouseEventHandler;
  label: string;
};
export type CellComponent = React.FunctionComponent<CellProps>;
