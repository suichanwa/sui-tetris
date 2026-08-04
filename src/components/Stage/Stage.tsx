import React from 'react';
import Cell from '../Cell/Cell';
import { StyledStage, StyledStageContainer } from './Stage.styles';
import { TETROMINOS } from '../../setup';

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];

type Props = {
  stage: STAGE;
  highQuality: boolean;
  textureVersion: number;
}

const Stage: React.FC<Props> = ({ stage, highQuality, textureVersion }) => (
  <StyledStageContainer>
    <StyledStage>
      {stage.map(row =>
        row.map((cell, x) => (
          <Cell key={x} type={cell[0]} highQuality={highQuality} textureVersion={textureVersion} />
        ))
      )}
    </StyledStage>
  </StyledStageContainer>
)

export default Stage;