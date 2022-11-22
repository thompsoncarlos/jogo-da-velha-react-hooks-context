import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export default function Square({ value, index }) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    history,
    setHistory,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);

    setHistory([...history,
      {
        squares: [...squares],
        isXNext: !isXNext,
        whoIsWinner,
      }
    ]);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}
