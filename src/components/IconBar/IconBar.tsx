import React from 'react';
import { StyledIconBar, StyledIconButton } from './IconBar.styles';

type Props = {
  highQuality: boolean;
  onToggleQuality: () => void;
  onOpenHelp: () => void;
  onOpenSettings: () => void;
};

const IconBar: React.FC<Props> = ({ highQuality, onToggleQuality, onOpenHelp, onOpenSettings }) => (
  <StyledIconBar>
    <StyledIconButton onClick={onToggleQuality} aria-label='Toggle texture quality'>
      {highQuality ? 'HD' : 'SD'}
    </StyledIconButton>
    <StyledIconButton onClick={onOpenHelp} aria-label='How to play'>
      ?
    </StyledIconButton>
    <StyledIconButton onClick={onOpenSettings} aria-label='Settings'>
      ⚙
    </StyledIconButton>
  </StyledIconBar>
);

export default IconBar;
