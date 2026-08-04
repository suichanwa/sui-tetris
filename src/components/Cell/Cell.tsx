import React from 'react';
import { StyledCell } from './Cell.styles';
import { TETROMINOS } from '../../setup';

type Props = {
  type: keyof typeof TETROMINOS;
  highQuality: boolean;
  textureVersion: number;
};

//Cell component will be outup images instead of colored blocks
const Cell: React.FC<Props> = ({ type, highQuality, textureVersion }) => {
  const rawImage = highQuality ? TETROMINOS[type].imageHQ : TETROMINOS[type].image;
  return (
    <StyledCell
      type={type}
      color={TETROMINOS[type].color}
      image={rawImage ? `${rawImage}?v=${textureVersion}` : undefined}
    />
  );
};


export default React.memo(Cell);