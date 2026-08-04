import React from 'react';
import { StyledOverlay, StyledPanel, StyledPanelHeader, StyledCloseButton } from './Modal.styles';

type Props = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ title, onClose, children }) => (
  <StyledOverlay onClick={onClose}>
    <StyledPanel onClick={e => e.stopPropagation()}>
      <StyledPanelHeader>
        <h2>{title}</h2>
        <StyledCloseButton onClick={onClose} aria-label='Close'>
          ✕
        </StyledCloseButton>
      </StyledPanelHeader>
      {children}
    </StyledPanel>
  </StyledOverlay>
);

export default Modal;
