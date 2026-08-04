import styled from 'styled-components';

export const StyledIconBar = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
  max-width: 380px;
  margin-bottom: 8px;
`;

export const StyledIconButton = styled.button`
  box-sizing: border-box;
  min-width: 36px;
  height: 36px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #777;
  background: #111;
  color: white;
  font-size: 0.9rem;
  line-height: 1;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;

  &:active {
    background: #333;
  }
`;
