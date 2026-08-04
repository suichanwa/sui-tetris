import React from 'react';
import { createStage, isColliding } from './gameHelpers';

// Custom hooks
import { useInterval } from './hooks/useInterval';
import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';
import { useGameStatus } from './hooks/useGameStatus';

// Components
import Stage from './components/Stage/Stage';
import Display from './components/Display/Display';
import StartButton from './components/StartButton/StartButton';
import TouchControls from './components/TouchControls/TouchControls';
import IconBar from './components/IconBar/IconBar';
import Modal from './components/Modal/Modal';

// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
  const [dropTime, setDroptime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true);
  const [highQuality, setHighQuality] = React.useState(() => localStorage.getItem('highQuality') !== 'false');
  const [helpOpen, setHelpOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [textureVersion, setTextureVersion] = React.useState(0);
  const modalOpen = helpOpen || settingsOpen;

  const gameArea = React.useRef<HTMLDivElement>(null);

  const toggleQuality = (): void => {
    setHighQuality(prev => {
      localStorage.setItem('highQuality', String(!prev));
      return !prev;
    });
  };

  // Bust the browser's image cache so replacing files on disk (e.g. re-running
  // an upscaler) shows up immediately, without reloading the page.
  const refreshTextures = (): void => setTextureVersion(prev => prev + 1);

  const { player, updatePlayerPos, resetPlayer, playerRotate } = usePlayer();
  const { stage, setStage, rowsCleared } = useStage(player, resetPlayer);
  const { score, setScore, rows, setRows, level, setLevel } = useGameStatus(rowsCleared);

  const movePlayer = (dir: number) => {
    if (!isColliding(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false });
    }
  };

  const keyUp = ({ keyCode }: { keyCode: number }): void => {
    if (!gameOver && !modalOpen) {
      // Change the droptime speed when user releases down arrow / s
      if (keyCode === 40 || keyCode === 83) {
        setDroptime(1000 / level + 200);
      }
    }
  };

  const handleStartGame = (): void => {
    // Need to focus the window with the key events on start
    if (gameArea.current) gameArea.current.focus();
    // Reset everything
    setStage(createStage());
    setDroptime(1000);
    resetPlayer();
    setScore(0);
    setLevel(1);
    setRows(0);
    setGameOver(false);
  };

  const move = ({ keyCode, repeat }: { keyCode: number; repeat: boolean }): void => {
    if (gameOver) {
      if (keyCode === 13 && !modalOpen && !repeat) handleStartGame();
      return;
    }
    if (!modalOpen) {
      if (keyCode === 37 || keyCode === 65) {
        // Left / A
        movePlayer(-1);
      } else if (keyCode === 39 || keyCode === 68) {
        // Right / D
        movePlayer(1);
      } else if (keyCode === 40 || keyCode === 83) {
        // Down / S — just call once
        if (repeat) return;
        setDroptime(30);
      } else if (keyCode === 38 || keyCode === 87) {
        // Up / W
        playerRotate(stage);
      }
    }
  };

  const drop = (): void => {
    // Increase level when player has cleared 10 rows
    if (rows > level * 10) {
      setLevel(prev => prev + 1);
      // Also increase speed
      setDroptime(1000 / level + 200);
    }

    if (!isColliding(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log('Game over!');
        setGameOver(true);
        setDroptime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const softDropStart = (): void => {
    if (!gameOver) setDroptime(30);
  };

  const softDropEnd = (): void => {
    if (!gameOver) setDroptime(1000 / level + 200);
  };

  useInterval(() => {
    drop();
  }, modalOpen ? null : dropTime);

  return (
    <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
      <StyledTetris>
        <IconBar
          highQuality={highQuality}
          onToggleQuality={toggleQuality}
          onRefreshTextures={refreshTextures}
          onOpenHelp={() => setHelpOpen(true)}
          onOpenSettings={() => setSettingsOpen(true)}
        />
        <div className='display'>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text='Game Over!' />
              <StartButton callback={handleStartGame} />
            </>
          ) : (
            <>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </>
          )}
        </div>
        <Stage stage={stage} highQuality={highQuality} textureVersion={textureVersion} />
        {!gameOver && (
          <TouchControls
            onLeft={() => movePlayer(-1)}
            onRight={() => movePlayer(1)}
            onRotate={() => playerRotate(stage)}
            onSoftDropStart={softDropStart}
            onSoftDropEnd={softDropEnd}
          />
        )}
      </StyledTetris>
      {helpOpen && (
        <Modal title='How to play' onClose={() => setHelpOpen(false)}>
          <p>Press Enter to start.</p>
          <p>Keyboard: ← → to move, ↑ / W to rotate, ↓ / S to soft drop.</p>
          <p>WASD: A left, D right, W rotate, S soft drop.</p>
          <p>Touch: use the on-screen D-pad below the board.</p>
          <p>Clear full rows to score. Speed increases every 10 rows.</p>
        </Modal>
      )}
      {settingsOpen && (
        <Modal title='Settings' onClose={() => setSettingsOpen(false)}>
          <p>More settings coming soon.</p>
        </Modal>
      )}
    </StyledTetrisWrapper>
  );
};

export default App;
