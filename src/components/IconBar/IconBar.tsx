import React from 'react';
import { StyledIconBar, StyledIconButton } from './IconBar.styles';

type Props = {
  highQuality: boolean;
  onToggleQuality: () => void;
  onRefreshTextures: () => void;
  onOpenHelp: () => void;
  onOpenSettings: () => void;
};

const IconBar: React.FC<Props> = ({ highQuality, onToggleQuality, onRefreshTextures, onOpenHelp, onOpenSettings }) => (
  <StyledIconBar>
    <StyledIconButton onClick={onToggleQuality} aria-label='Toggle texture quality'>
      {highQuality ? 'HD' : 'SD'}
    </StyledIconButton>
    <StyledIconButton onClick={onRefreshTextures} aria-label='Reload textures'>
      ⟲
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
