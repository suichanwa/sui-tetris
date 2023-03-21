import React from 'react';
import { StyledCell } from './Cell.styles';
import { TETROMINOS } from '../../setup';

type Props = {
  type: keyof typeof TETROMINOS;
};

//Cell component will be outup images instead of colored blocks
const Cell: React.FC<Props> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);


export default React.memo(Cell);