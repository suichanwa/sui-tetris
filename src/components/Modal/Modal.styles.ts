import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 100;
`;

export const StyledPanel = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 360px;
  max-height: 80vh;
  overflow-y: auto;
  background: #111;
  border: 2px solid #777;
  border-radius: 12px;
  padding: 20px;
  color: #eee;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledPanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  h2 {
    margin: 0;
    font-size: 1.1rem;
  }
`;

export const StyledCloseButton = styled.button`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: #333;
  color: white;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: #444;
  }
`;
