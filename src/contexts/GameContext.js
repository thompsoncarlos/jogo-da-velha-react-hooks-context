import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [whoIsWinner, setWhoIsWinner] = useState('');
  const [history, setHistory] = useState([]);

  const state = {
    squares,
    isXNext,
    whoIsWinner,
    history,
    setSquares,
    setIsXNext,
    setWhoIsWinner,
    setHistory,
  }

  return (
  <GameContext.Provider value={state}>
    { children }
  </GameContext.Provider>
  );
}