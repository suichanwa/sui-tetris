import React from 'react';
import { StyledCell } from './Cell.styles';
import { TETROMINOS } from '../../setup';

type Props = {
  type: keyof typeof TETROMINOS;
  highQuality: boolean;
};

//Cell component will be outup images instead of colored blocks
const Cell: React.FC<Props> = ({ type, highQuality }) => (
  <StyledCell
    type={type}
    color={TETROMINOS[type].color}
    image={highQuality ? TETROMINOS[type].imageHQ : TETROMINOS[type].image}
  />
);


export default React.memo(Cell);