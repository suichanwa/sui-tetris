import styled from 'styled-components';
import { TETROMINOS } from '../../setup';

type Props = {
  type: keyof typeof TETROMINOS;
  color: string;
  image?: string;
};

export const StyledCell = styled.div<Props>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${props => (props.image ? `url(${props.image})` : `rgba(${props.color}, 0.8)`)};
  background-size: cover;
  background-position: center;
`;
