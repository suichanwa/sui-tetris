import React from "react";
import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";

type Props = {
  stage: Array<Array<[string, string]>>
}

const Stage: React.FC<Props> = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row, y) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
