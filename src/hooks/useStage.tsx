import { useState, useEffect } from "react";
import { createStage} from "../gamehelper.js";
import Stage from "../Components/Stage.js";

type Player = {
  pos: { x: number; y: number };
  tetromino: number[][];
  collided: boolean;
};

type Stage = Array<Array<[string, string]>>;

export const useStage = (player: Player, resetPlayer: () => void) => {
  const [stage, setStage] = useState<Stage>(createStage());

  useEffect(() => {
    const updateStage = (prevStage: Stage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });

      // Then check if we collided
      if (player.collided) {
        resetPlayer();
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage];
}


