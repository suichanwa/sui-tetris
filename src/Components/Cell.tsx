import { FC } from 'react';
import { TETROMINOES } from '../tetrominos';
import { StyledCell } from './styles/StyledCell';

export interface CellProps {
  type: keyof typeof TETROMINOES | 0;
}

export interface StyledCellProps {
  type: string | number;
  color: string;
}

const Cell: FC<CellProps> = ({ type }) => {
  return (
    <StyledCell
      type={type}
      color={TETROMINOES[type as keyof typeof TETROMINOES].color}
    />
  );
};

export default Cell;
