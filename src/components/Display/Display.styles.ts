import styled from 'styled-components';

type Props = {
  $gameOver?: boolean;
};

export const StyledDisplay = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: clamp(8px, 3vw, 20px);
  border: 2px solid #777;
  min-height: 20px;
  flex: 1;
  min-width: 0;
  border-radius: 10px;
  color: ${props => (props.$gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(0.65rem, 2.8vw, 0.8rem);
  white-space: nowrap;
`;
