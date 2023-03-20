import React, { FC } from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

interface StartButtonProps {
  callback: () => void;
}

const StartButton: FC<StartButtonProps> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
