import { useState } from "react";
import { createStage, checkCollision } from "../gamehelper";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris: React.FC = () => {
const [dropTime, setDropTime] = useState<number | null>(null);
const [gameOver, setGameOver] = useState<boolean>(false);

const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
const [score, setScore] = useState<number>(0);
const [rows, setRows] = useState<number>(0);
const [level, setLevel] = useState<number>(0);

console.log("re-render");

const movePlayer = (dir: number): void => {
if (!checkCollision(player, stage, { x: dir, y: 0 })) {
updatePlayerPos({ x: dir, y: 0 });
}
};

const startGame = (): void => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
};

const drop = (): void => {
// Increase Level when player clears ten rows
if (rows > (level + 1) * 10) {
setLevel((prev) => prev + 1);
// Also increase speed
setDropTime(1000 / (level + 1) + 200);
}