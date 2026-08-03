import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  outline: none;
  display: flex;
  justify-content: center;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 0;
  padding: clamp(4px, 2vw, 24px);
  box-sizing: border-box;

  .display {
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    max-width: 380px;
    margin-bottom: 12px;
  }
`;
