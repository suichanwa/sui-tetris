import { useState, useCallback } from "react";
import { STAGE_WIDTH, checkCollision } from "../gamehelper";

import { TETROMINOES, randomTetromino } from "../tetrominos";


export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOES[0].shape,
    collided: false
  });

  const rotate = (matrix: any[], dir: number) => {
    // Make rows become cols (trans)
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    // Reverse each row to rotate entire matrix
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  const playerRotate = (stage: [number, string][][], dir: number) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

    const updatePlayerPos = ({ x, y, collided }: any) => {
    setPlayer((prev) => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collided
        }));
    };

    const resetPlayer = useCallback(() => {
            setPlayer({
                pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
                tetromino: randomTetromino().shape,
                collided: false
            });
    }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
