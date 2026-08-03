import React from 'react';
import { StyledTouchControls, StyledDpad, StyledTouchButton } from './TouchControls.styles';

type Props = {
  onLeft: () => void;
  onRight: () => void;
  onRotate: () => void;
  onSoftDropStart: () => void;
  onSoftDropEnd: () => void;
};

const TouchControls: React.FC<Props> = ({ onLeft, onRight, onRotate, onSoftDropStart, onSoftDropEnd }) => (
  <StyledTouchControls>
    <StyledDpad>
      <div />
      <StyledTouchButton onClick={onRotate} aria-label='Rotate'>
        ⟳
      </StyledTouchButton>
      <div />
      <StyledTouchButton onClick={onLeft} aria-label='Move left'>
        ←
      </StyledTouchButton>
      <StyledTouchButton
        onPointerDown={onSoftDropStart}
        onPointerUp={onSoftDropEnd}
        onPointerLeave={onSoftDropEnd}
        aria-label='Soft drop'
      >
        ↓
      </StyledTouchButton>
      <StyledTouchButton onClick={onRight} aria-label='Move right'>
        →
      </StyledTouchButton>
    </StyledDpad>
  </StyledTouchControls>
);

export default TouchControls;
