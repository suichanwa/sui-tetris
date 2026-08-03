import styled from 'styled-components';

export const StyledTouchControls = styled.div`
  display: none;
  width: 100%;
  max-width: 380px;
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: env(safe-area-inset-bottom, 0);

  @media (pointer: coarse), (max-width: 600px) {
    display: flex;
  }
`;

export const StyledDpad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 48px);
  grid-template-rows: repeat(2, 48px);
  gap: 6px;
`;

export const StyledTouchButton = styled.button`
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  border: none;
  background: #111;
  color: white;
  font-size: 1.2rem;
  line-height: 1;
  touch-action: manipulation;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;

  &:active {
    background: #333;
  }
`;
